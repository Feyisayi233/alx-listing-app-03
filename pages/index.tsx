import Head from "next/head";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Luxury",
  "Pet Friendly",
  "Beachfront",
  "Mountain View",
  "Free Parking",
  "Fireplace",
];

const Pill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    className={`px-4 py-1 rounded-full border font-medium text-sm transition-colors duration-200 mr-2 mb-2 ${
      active
        ? "bg-blue-600 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-blue-100"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const PropertyCard = ({
  property,
}: {
  property: (typeof PROPERTYLISTINGSAMPLE)[0];
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
    <img
      src={property.image}
      alt={property.name}
      className="h-48 w-full object-cover"
    />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {property.name}
        </h3>
        <div className="text-sm text-gray-500 mb-2">
          {property.address.city}, {property.address.country}
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {property.category.map((cat) => (
            <span
              key={cat}
              className="bg-gray-200 text-xs px-2 py-0.5 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-blue-600 font-bold text-lg">
          ${property.price}
        </span>
        <span className="text-yellow-500 font-semibold">
          ★ {property.rating}
        </span>
      </div>
      {property.discount && (
        <span className="mt-2 text-xs text-green-600 font-semibold">
          {property.discount}% OFF
        </span>
      )}
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      {/* Hero Section */}
      <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
        <img
          src="/assets/house1.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl text-white drop-shadow">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}
