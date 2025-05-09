"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Users, Award, Clock } from "lucide-react"

export default function About() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      window.initMap = () => {
        setMapLoaded(true)
        const mapElement = document.getElementById("map")
        if (mapElement) {
          // Coordinates for Kigali, Rwanda
          const kigali = { lat: -1.9441, lng: 30.0619 }
          // Declare google here to avoid undefined error
          const google = window.google
          const map = new google.maps.Map(mapElement, {
            center: kigali,
            zoom: 14,
          })

          new google.maps.Marker({
            position: kigali,
            map: map,
            title: "TechTrends Ltd",
          })
        }
      }
    }

    // In a real application, you would use an actual API key
    // For this example, we'll just create a placeholder map div
    setMapLoaded(true)

    // Uncomment this to use actual Google Maps
    // loadGoogleMapsScript();

    return () => {
      // Clean up
      window.initMap = undefined
    }
  }, [])

  return (
    <div>
      {/* About Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TechTrends Ltd</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            A leading business company specializing in electronic gadgets in Kigali City, Rwanda.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="TechTrends Office"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, TechTrends Ltd has grown to become one of the leading providers of electronic gadgets
                in Rwanda. Our journey began with a simple mission: to bring the latest technology to the people of
                Kigali at affordable prices.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have expanded our product range and services, always staying at the forefront of
                technological innovation. Our team of experts is passionate about technology and committed to providing
                exceptional customer service.
              </p>
              <p className="text-gray-700">
                Today, TechTrends Ltd is recognized for its quality products, competitive pricing, and outstanding
                customer support. We continue to grow and evolve, always with our customers' needs at the heart of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Customer Focus",
                description:
                  "We put our customers first, striving to exceed their expectations with every interaction.",
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We are committed to offering only the highest quality products and services.",
              },
              {
                icon: Clock,
                title: "Innovation",
                description: "We continuously seek new technologies and solutions to better serve our customers.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {mapLoaded ? (
              <div id="map" className="h-96 w-full bg-gray-200">
                {/* This is a placeholder for the Google Map */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-lg font-semibold mb-2">TechTrends Ltd</p>
                    <p className="text-gray-600">Kigali City, Rwanda</p>
                    <p className="text-gray-500 mt-4">
                      (In a real application, this would be an interactive Google Map showing our location in Kigali)
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                <p>Loading map...</p>
              </div>
            )}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Visit us at our store in Kigali City to explore our range of electronic gadgets and get expert advice from
              our team.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
