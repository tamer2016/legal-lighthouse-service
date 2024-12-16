import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, MapPin, Mail, Scale, Gavel, FileText } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Scale className="w-8 h-8 text-gold" />,
      title: "استشارات قانونية",
      description: "نقدم استشارات قانونية شاملة في مختلف المجالات"
    },
    {
      icon: <Gavel className="w-8 h-8 text-gold" />,
      title: "الترافع أمام المحاكم",
      description: "نمثل موكلينا في جميع درجات التقاضي"
    },
    {
      icon: <FileText className="w-8 h-8 text-gold" />,
      title: "صياغة العقود",
      description: "إعداد وصياغة كافة أنواع العقود والاتفاقيات"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="heading-1 mb-6">
            مكتب المحامي عبدالله عمر عطار
            <br />
            <span className="text-gold">للمحاماة والاستشارات القانونية</span>
          </h1>
          <p className="paragraph max-w-2xl mx-auto mb-8">
            نقدم خدمات قانونية احترافية تلبي احتياجاتكم بكفاءة وموثوقية
          </p>
          <Button className="bg-gold hover:bg-gold-dark text-white text-lg px-8 py-6 rounded-lg transition-all duration-300">
            تواصل معنا
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center mb-16">خدماتنا القانونية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card p-8 text-center animate-in hover:shadow-xl transition-all duration-300">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-light">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center mb-16">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center animate-in">
              <PhoneCall className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">اتصل بنا</h3>
              <p className="text-gray-light" dir="ltr">0532299686</p>
            </Card>
            <Card className="glass-card p-8 text-center animate-in">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">موقعنا</h3>
              <p className="text-gray-light">شارع ثوبان النبوي، بطحاء قريش، مكة 24352</p>
            </Card>
            <Card className="glass-card p-8 text-center animate-in">
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-light">info@attar-law.com</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;