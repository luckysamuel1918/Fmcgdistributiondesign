import { ShoppingCart, Package, Truck, Users, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Food Products Distribution',
      description: 'Comprehensive distribution of quality food products to retail and wholesale partners.',
      image: 'https://images.unsplash.com/photo-1698466632388-77a7495b89b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvZHVjdHMlMjBzdXBlcm1hcmtldHxlbnwxfHx8fDE3Njg3NzAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Package,
      title: 'Beverage Supply',
      description: 'Wide range of beverages including soft drinks, juices, and bottled water.',
      image: 'https://images.unsplash.com/photo-1577695464142-e3a24f4e88f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZSUyMGRyaW5rcyUyMGJvdHRsZXN8ZW58MXx8fHwxNzY4NzcwMTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Truck,
      title: 'Fast Moving Consumer Goods',
      description: 'Complete range of FMCG products for daily consumer needs.',
      image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzY4NzcwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Dedicated support and personalized service for each client',
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: 'Deep understanding of FMCG market trends and demands',
    },
    {
      icon: Clock,
      title: 'Efficient Operations',
      description: 'Streamlined processes for quick and reliable service',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive distribution solutions tailored to meet your business needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us?
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
