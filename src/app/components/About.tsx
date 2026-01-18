import { CheckCircle2, Target, Eye, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Caminierre Global Concepts
          </h2>
          <p className="text-lg text-gray-600">
            A leading distributor of Fast Moving Consumer Goods committed to delivering
            quality products and exceptional service to our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1670913005803-59e70ab5a1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2ODc3MDE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Supply Chain"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
            <p className="text-gray-600 mb-6">
              Caminierre Global Concepts is a professional distribution company
              specializing in Fast Moving Consumer Goods (FMCG). We provide reliable
              supply and distribution services for food, beverages, and general
              merchandise to businesses across the region.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                  <p className="text-gray-600">
                    We ensure all products meet the highest quality standards
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Timely Delivery</h4>
                  <p className="text-gray-600">
                    Efficient logistics for on-time product delivery
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Wide Product Range</h4>
                  <p className="text-gray-600">
                    Comprehensive selection of FMCG products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide efficient and reliable distribution services that connect
              quality products with businesses and consumers.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading FMCG distributor known for excellence, reliability,
              and customer satisfaction.
            </p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-lg sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, quality, customer focus, and excellence in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
