import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Briefcase, Trees, Lightbulb } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export const Programs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const programs = [
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Providing scholarships, school supplies, and tutoring programs for underprivileged students.',
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg',
    },
    {
      icon: Briefcase,
      title: 'Skills Training',
      description: 'Digital literacy, entrepreneurship, and vocational training programs for youth employment.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Connecting young people with experienced professionals for guidance and career development.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    },
    {
      icon: Heart,
      title: 'Community Charity',
      description: 'Regular charity drives providing essential supplies, food, and support to vulnerable families.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
    },
    {
      icon: Trees,
      title: 'Environmental Conservation',
      description: 'Tree planting initiatives, clean-up campaigns, and environmental education programs.',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
    },
    {
      icon: Lightbulb,
      title: 'Leadership Development',
      description: 'Youth leadership forums, workshops, and civic engagement programs building future leaders.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    },
  ];

  const activities = [
    {
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
      title: 'Community Outreach',
    },
    {
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      title: 'Skills Workshops',
    },
    {
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      title: 'Youth Forums',
    },
    {
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
      title: 'Environmental Campaigns',
    },
    {
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      title: 'Leadership Summits',
    },
    {
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
      title: 'Community Building',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.8), rgba(1, 50, 32, 0.8)), url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Comprehensive initiatives empowering youth and strengthening communities
          </motion.p>
        </div>
      </section>

      <Section>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programs address critical needs while building capacity for long-term sustainable development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <motion.div key={program.title} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-primary text-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section dark>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Activities</h2>
          <p className="text-xl text-gray-300">
            A glimpse into the impactful work we do across Rwanda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl h-64 cursor-pointer"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get Involved</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in making a difference. Whether through volunteering, donations, or partnerships, your support helps us reach more young people and communities.
          </p>
          <motion.a
            href="/get-involved"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg"
          >
            Join Our Mission
          </motion.a>
        </motion.div>
      </Section>
    </div>
  );
};
