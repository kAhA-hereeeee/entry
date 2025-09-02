import { Slider } from "@material-tailwind/react";
import React from 'react';
import { Button } from 'antd';
import ApexCharts from 'apexcharts'
 
export default function Nutton() {
  return (
    <><div className="">
    <div className="font-sans bg-white text-gray-900">
      <header className="relative bg-gray-100">
        <div className="absolute inset-0">
          <img src="Mountains.jpg" alt="Hero" className="p-3 rounded-3xl w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <nav className="flex justify-between items-center px-6 py-4">
            <div className="text-2xl font-bold text-green-600 border font-outline-2 hover:font-outline-4 outline-4">GoLobe</div>
            <div className="flex space-x-6">
              <button className="text-gray-700">Login</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Sign up
              </button>
            </div>
          </nav>
          <div className="text-center text-white py-20">
            <h2 className="text-lg">Helping Others</h2>
            <h1 className="text-5xl font-bold">LIVE & TRAVEL</h1>
            <p className="mt-2">Special offers to suit your plan</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-lg -mt-10">
            <div className="flex space-x-4">
              <button className="px-4 py-2 border-b-2 border-green-500">
                Flights
              </button>
              <button className="px-4 py-2">Stays</button>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <input
                type="text"
                placeholder="From - To"
                className="p-3 border rounded-lg w-full"
              />
              <select className="p-3 border rounded-lg w-full">
                <option>Return</option>
                <option>One Way</option>
              </select>
              <input
                type="text"
                placeholder="Depart - Return"
                className="p-3 border rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Passengers, Class"
                className="p-3 border rounded-lg w-full"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-sm text-green-600">+ Add Promo Code</button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Show Flights
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Plan your perfect trip</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Istanbul, Turkey",
            "Sydney, Australia",
            "Baku, Azerbaijan",
            "Malé, Maldives",
            "Paris, France",
            "New York, US",
            "London, UK",
            "Tokyo, Japan",
            "Dubai, UAE",
          ].map((place, i) => (
            <div key={i} className="border rounded-lg p-4 shadow hover:shadow-lg">
              <img src="Baku.jpg"className="w-full h-32 object-cover rounded-md" />
              <h3 className="mt-2 font-semibold">{place}</h3>
              <p className="text-sm text-gray-500">Flights • Hotels • Resorts</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-6">
        <div className="relative">
          <img src="Flights.jpg" a className="rounded-xl w-full h-64 object-cover" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold">Flights</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 rounded-lg">
              Show Flights
            </button>
          </div>
        </div>
        <div className="relative">
          <img src="Hotels.jpg" className="rounded-xl w-full h-64 object-cover" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold">Hotels</h3>
            <button className="mt-2 px-4 py-2 bg-green-500 rounded-lg">
              Show Hotels
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Reviews</h2>
            <button className="text-sm text-green-600">See All</button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["Olga", "Thomas", "Eliot"].map((name, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <h3 className="font-semibold mb-2">
                  “The facilities are superb. Clean, slick, bright.”
                </h3>
                <p className="text-sm text-gray-600">
                  Really appreciate the help and support from the staff...
                </p>
                <div className="flex items-center mt-3 space-x-2">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="text-sm mt-2">{name}</p>
                <img
                  src="Mountains.jpg"
                  alt="review"
                  className="mt-3 w-full h-32 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-100 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Subscribe Newsletter</h2>
          <p className="mt-2 text-gray-700">
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 w-72 border rounded-l-lg"
            />
            <button className="px-6 py-3 bg-black text-white rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-green-200 py-8 mt-10">
        <div  className=" max-w-6xl mx-auto grid md:grid-cols-5 gap-6 px-6">
          <div>
            <h3 className="text-lg font-bold text-green-700">GoLobe</h3>
            <div className="flex space-x-4 mt-3">
              <span>🌐</span>
              <span>📘</span>
              <span>▶️</span>
              <span>📸</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Destinations</h4>
            <p>Canada</p>
            <p>Alaska</p>
            <p>France</p>
            <p>Iceland</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Our Activities</h4>
            <p>Northern Lights</p>
            <p>Cruising & sailing</p>
            <p>Multi-activities</p>
            <p>Kayaking</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Travel Blogs</h4>
            <p>Bali Travel Guide</p>
            <p>Sri Lanka Travel Guide</p>
            <p>Peru Travel Guide</p>
            <p>Bali Travel Guide</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About Us</h4>
            <p>Our Story</p>
            <p>Work with us</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  </>
  );
}