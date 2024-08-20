// services.tsx
import Link from "next/link";


export default function ServicesPage() {
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="max-container padding-container">
            <h1 className="text-3xl font-bold mb-8">Our Services</h1>
            <div className="flex flex-col gap-4">
                {/* Hotel Booking Button */}
                <Link href="/hotel-booking" legacyBehavior>
                    <button className="btn_green">Hotel Booking --</button>
                </Link>

                {/* Flight Booking Button */}
                <Link href="/flight-booking" legacyBehavior>
                    <button className="btn_green">Flight Booking -- </button>
                </Link>

                {/* Taxi Booking Button */}
                <Link href="/taxi-booking" legacyBehavior>
                    <button className="btn_green">Taxi Booking -- </button>
                </Link>
            </div>
            <br></br>
            
            
        </div>
        </section>
    );
}
