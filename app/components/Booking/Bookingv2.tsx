"use client";
import React, { useEffect, useState } from 'react';

// Define the structure of the appointment segment
interface AppointmentSegment {
  durationMinutes: number;
  teamMemberId: string;
  serviceVariationId: string;
  serviceVariationNumber: string;
}

// Define the structure of an availability object
interface Availability {
  startAt: string;
  location_id: string;
  appointmentSegments: AppointmentSegment[];
}

// Define the structure of the API response
interface AvailabilityResponse {
  availabilities: Availability[];
  errors?: string[];
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
      
      const data: AvailabilityResponse = await response.json(); // Parse JSON response
      setAvailableTimes(data.availabilities); // Assign parsed data
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
      {availableTimes?.length > 0 ? (
        <ul>
          {availableTimes.map((availability, index) => {
            const startDateTime = new Date(availability.startAt);
            const formattedTime = startDateTime.toLocaleString(); // Format to user-friendly string

            return (
              <li key={index}>
                <div>
                  <strong>Time:</strong> {formattedTime} 
                  <span> | Duration: {availability.appointmentSegments[0].durationMinutes} minutes</span>
                  <span>{availability.appointmentSegments[0].serviceVariationId}</span>
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
