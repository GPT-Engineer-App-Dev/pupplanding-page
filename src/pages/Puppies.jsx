import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const puppies = [
  { id: 1, name: "Max", breed: "Labrador", age: "3 months", image: "/placeholder.svg" },
  { id: 2, name: "Bella", breed: "Golden Retriever", age: "2 months", image: "/placeholder.svg" },
  { id: 3, name: "Charlie", breed: "Beagle", age: "4 months", image: "/placeholder.svg" },
  { id: 4, name: "Lucy", breed: "Poodle", age: "3 months", image: "/placeholder.svg" },
];

const Puppies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Adorable Puppies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {puppies.map((puppy) => (
          <Card key={puppy.id}>
            <CardHeader>
              <CardTitle>{puppy.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={puppy.image} alt={puppy.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="text-gray-600 mb-2">Breed: {puppy.breed}</p>
              <p className="text-gray-600 mb-4">Age: {puppy.age}</p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Puppies;