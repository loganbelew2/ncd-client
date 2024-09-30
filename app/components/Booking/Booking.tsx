// components/Booking.tsx
"use client";

import React, { useState, useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./Booking.module.css";
import ServiceCardNoImage from "../ServiceCard/ServiceCardNoImage";
import { useSearchParams } from "next/navigation";

const steps = [
  { id: 1, title: "Select Service" },
  { id: 2, title: "Booking Details" },
];

const services = [
  {
    id: 1,
    title: "Exterior Detailing",
    price: 60,
    description:
      "Thorough cleaning, paint decontamination, and protection for your vehicle’s exterior.",
    imageUrl: "/images/Car-Exterior-Detailing.jpg",
  },
  {
    id: 2,
    title: "Interior Detailing",
    price: 99,
    description:
      "Comprehensive cleaning, conditioning and protection of your vehicle’s interior.",
    imageUrl: "/images/interior-detailing.jpg",
  },
  {
    id: 3,
    title: "Full Detailing",
    price: 129,
    description:
      "Complete interior and exterior detailing for a showroom finish.",
    imageUrl: "/images/full-detail.jpg",
  },
];

const Booking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedCarType, setSelectedCarType] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const serviceParam: string | null = searchParams.get("serviceId");
  const serviceParamInt: number | null = serviceParam
    ? parseInt(serviceParam)
    : null;

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
    setSelectedCarType(null);
  };

  const handleCarTypeSelect = (carTypeId: number) => {
    setSelectedCarType(carTypeId);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setSelectedService(null);
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    setSelectedService(serviceParamInt);
  }, [serviceParamInt]);

  const getCalendlyUrl = () => {
    if (selectedService === 1) {
      return selectedCarType === 1
        ? "https://calendly.com/nashvillecardetail/vehicle-detailing?primary_color=00aaff"
        : selectedCarType === 2
        ? "https://calendly.com/nashvillecardetail/interior-detail-clone?primary_color=00aaff"
        : "https://calendly.com/nashvillecardetail/interior-detail-large-clone-clone?primary_color=00aaff";
    } else if (selectedService === 2) {
      return selectedCarType === 1
        ? "https://calendly.com/nashvillecardetail/exterior-auto-detail?primary_color=00aaff"
        : selectedCarType === 2
        ? "https://calendly.com/nashvillecardetail/exterior-detail-clone?primary_color=00aaff"
        : "https://calendly.com/nashvillecardetail/exterior-detail-large-clone?primary_color=00aaff";
    } else if (selectedService === 3) {
      return selectedCarType === 1
        ? "https://calendly.com/nashvillecardetail/full-detail-large-clone?primary_color=00aaff"
        : selectedCarType === 2
        ? "https://calendly.com/nashvillecardetail/full-detail-large?primary_color=00aaff"
        : "https://calendly.com/nashvillecardetail/full-detail-clone?primary_color=00aaff";
    }
    return null;
  };

  useEffect(() => {
    if (currentStep === 2) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [currentStep]);

  const renderStepContent = () => {
    const sservice =
      selectedService != null ? services[selectedService - 1] : services[1];

    switch (currentStep) {
      case 1:
        if (selectedService == null) {
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
        } else {
          return (
            <div className={styles.contain}>
              <div className={styles.servicesContainer}>
                {services.map((service) =>
                  sservice.id == service.id ? (
                    <div key={service.id}>
                      <ServiceCardNoImage
                        title={sservice.title}
                        price={sservice.price}
                        description={sservice.description}
                        onSelect={() => handleServiceSelect(sservice.id)}
                      />
                      <div className={styles.carSizeCards}>
                        <div
                          className={`${styles.smallCar} ${styles.car}`}
                          onClick={() => handleCarTypeSelect(1)}
                        >
                          <div>
                            <h3 style={{textAlign:"center"}}>Regular</h3>
                            <p style={{ color: "gray" }}>2 to 4 door sedan</p>
                          </div>
                          <img
                            src="/images/se.webp"
                            width={75}
                            height={75}
                            alt=""
                          />
                        </div>

                        <div
                          className={`${styles.mediumCar} ${styles.car}`}
                          onClick={() => handleCarTypeSelect(2)}
                        >
                          <div>
                            <h3>Large</h3>
                            <span>+ $20</span>
                            <p style={{ marginBottom: 0, color: "gray" }}>
                              4 door SUV/ small truck
                            </p>
                          </div>
                          <img
                            src="/images/suv.jpg"
                            width={75}
                            height={75}
                            alt=""
                          />
                        </div>

                        <div
                          className={`${styles.largeCar} ${styles.car}`}
                          onClick={() => handleCarTypeSelect(3)}
                        >
                          <div>
                            <h3 style={{textAlign:"center"}}>Extra Large</h3>
                            <span>+ $40</span>
                            <p style={{ color: "gray" }}>3 row vehicle</p>
                          </div>
                          <img
                            src="/images/xlsuv.jpg"
                            width={100}
                            height={75}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      price={service.price}
                      description={service.description}
                      imageUrl={service.imageUrl}
                      onSelect={() => handleServiceSelect(service.id)}
                    />
                  )
                )}
              </div>
            </div>
          );
        }
      case 2:
        const calendlyUrl = getCalendlyUrl();
        return (
          <div>
            {calendlyUrl ? (
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "250px", height: "450px" }}
              ></div>
            ) : (
              <h3>Please go back and select a service</h3>
            )}
          </div>
        );
      case 3:
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
                step.id <= currentStep ? styles.completed : ""
              }`}
            ></div>
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
        </div>
      </div>
    </div>
  );
};

export default Booking;
