import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, Laptop, Headphones, Watch } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover the Latest in Tech Innovation</h1>
              <p className="text-lg mb-8 text-purple-100">
                TechTrends Ltd brings you cutting-edge electronic gadgets that transform the way you live, work, and
                play.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="bg-white text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-700 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipW0pcxvQZ3S74WsryGYkchNz5CzFH7y6Kg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BxKa1lXH7IHTgZ2g6V1ZAE0Ci8d7z7aKhDeKKpkL29N_tdmNLn0cqtSNIPcudjvH8zE&usqp=CAU"
                alt="Latest Tech Gadgets"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: "Smartphones", description: "Latest models with cutting-edge features" },
              { icon: Laptop, title: "Laptops", description: "Powerful performance for work and play" },
              { icon: Headphones, title: "Audio Devices", description: "Immersive sound experience" },
              { icon: Watch, title: "Smart Watches", description: "Track your health and stay connected" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://inventstore.in/wp-content/uploads/2024/07/63.webp"
                alt="TechTrends Store"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose TechTrends?</h2>
              <div className="space-y-4">
                {[
                  "Premium quality electronic gadgets",
                  "Expert technical support and advice",
                  "Competitive pricing and special offers",
                  "Fast delivery across Rwanda",
                  "Warranty on all products",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Our Products?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Visit our store in Kigali City or contact us to learn more about our latest electronic gadgets.
          </p>
          <Link
            href="/contact"
            className="bg-white text-purple-700 hover:bg-purple-100 px-8 py-3 rounded-md font-medium inline-flex items-center transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
