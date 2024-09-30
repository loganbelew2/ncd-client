"use client"
import React, { useEffect, useState } from 'react';

// Define the structure of the appointment segment
interface AppointmentSegment {
  duration_minutes: number;
  team_member_id: string;
  service_variation_id: string;
  service_variation_version: number;
}

// Define the structure of an availability object
interface Availability {
  start_at: string;
  location_id: string;
  appointment_segments: AppointmentSegment[];
}

// Define the structure of the API response
interface AvailabilityResponse {
  availabilities: Availability[];
  errors: string[];
}

const BookingV2: React.FC = () => {
  const [availableTimes, setAvailableTimes] = useState<Availability[]>([]);

  const fetchAvailability = async () => {
    try {
      const response = await fetch("/api/availability", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data: AvailabilityResponse = await response.json();

      // Check if response structure is correct
      if (Array.isArray(data.availabilities)) {
        setAvailableTimes(data.availabilities);
      } else {
        console.error("Unexpected response structure:", data);
        setAvailableTimes([]); // Reset to an empty array
      }
    } catch (error) {
      console.error("Error fetching availability:", error);
      setAvailableTimes([]); // Reset to an empty array on error
    }
  };

  useEffect(() => {
    fetchAvailability();
  }, []);

  return (
    <div>
      <h2>Available Appointment Times</h2>
      {availableTimes.length > 0 ? (
        <ul>
          {availableTimes.map((availability, index) => {
            const startDateTime = new Date(availability.start_at);
            const formattedTime = startDateTime.toLocaleString(); // Format to a more user-friendly string

            return (
              <li key={index}>
                <div>
                  <strong>Time:</strong> {formattedTime} 
                  <span> | Duration: {availability.appointment_segments[0].duration_minutes} minutes</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No available times found.</p>
      )}
    </div>
  );
};

export default BookingV2;
