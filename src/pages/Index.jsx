import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Dog Haven Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold">Dog Haven</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#gallery" className="text-gray-600 hover:text-gray-900">Gallery</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px]">
        <img src="/placeholder.svg" alt="Happy Dog" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Dog Haven</h1>
            <p className="text-xl mb-8">Your one-stop destination for all things dog-related</p>
            <Button size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="Team with dogs" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 leading-relaxed">
                At Dog Haven, we're passionate about providing the best care and services for your furry friends. Our team of experienced professionals is dedicated to ensuring the happiness and well-being of every dog that comes through our doors. Whether you need training, grooming, or boarding services, we're here to make your dog's tail wag with joy!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Dog Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional training to help your dog become well-behaved and obedient.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dog Grooming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Keep your furry friend looking and feeling their best with our grooming services.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dog Boarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A home away from home for your dog when you're away.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <img key={index} src="/placeholder.svg" alt={`Dog ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-2">123 Dog Street, Pawsome City, 12345</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Email: info@doghaven.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Dog Haven. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;