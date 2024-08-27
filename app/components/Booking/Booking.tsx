// components/Booking.tsx
'use client'
import React, { useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard'; // Import the ServiceCard component
import styles from './Booking.module.css';

const steps = [
  { id: 1, title: 'Select Service' },
  { id: 2, title: 'Choose Date & Time' },
  { id: 3, title: 'Enter Details' },
  { id: 4, title: 'Payment Information' },
  { id: 5, title: 'Review & Confirm' },
];

const services = [
  { 
    id: 2, 
    title: 'Interior Detailing', 
    price: 190,
    description: 'Comprehensive cleaning and conditioning of your vehicle’s interior.', 
    imageUrl: '/images/interior-detailing.jpg' 
  },
  { 
    id: 1, 
    title: 'Exterior Detailing', 
    price: 190,
    description: 'Thorough cleaning, polishing, and protection for your vehicle’s exterior.', 
    imageUrl: '/images/Car-Exterior-Detailing.jpg' 
  },
  { 
    id: 3, 
    title: 'Full Detailing', 
    price: 249,
    description: 'Complete interior and exterior detailing for a showroom finish.', 
    imageUrl: '/images/full-detail.jpg' 
  }
];

const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className={styles.servicesContainer}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.price}
                description={service.description}
                imageUrl={service.imageUrl}
                onSelect={() => handleServiceSelect(service.id)}
              />
            ))}
          </div>
        );
      case 2:
        return <div>Choose a date and time for your service.</div>;
      case 3:
        return <div>Enter your contact details and address.</div>;
      case 4:
        return <div>Enter Payment Information.</div>;
      case 5:
        return <div>Review your booking details and confirm.</div>;
      default:
        return <div>Something went wrong.</div>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{steps[currentStep - 1].title}</h1>
      </header>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.progressSection} ${
                step.id <= currentStep ? styles.completed : ''
              }`}
            >
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        {renderStepContent()}
        <div className={styles.buttons}>
          {currentStep > 1 && (
            <button onClick={handlePrevious} className={styles.button}>
              Previous
            </button>
          )}
          {currentStep < steps.length && (
            <button onClick={handleNext} className={styles.button}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
