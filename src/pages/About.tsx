import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Target, Eye, Award } from 'lucide-react';

export const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const leaders = [
    {
      name: 'Sarah Uwase',
      role: 'Founder & Executive Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Visionary leader with 10+ years of experience in youth development and community organizing.',
    },
    {
      name: 'David Mugisha',
      role: 'Programs Director',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Passionate about creating sustainable programs that empower youth and strengthen communities.',
    },
    {
      name: 'Grace Kamikazi',
      role: 'Communications Manager',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      bio: 'Expert in storytelling and digital engagement, connecting our mission with supporters worldwide.',
    },
    {
      name: 'Eric Habimana',
      role: 'Volunteer Coordinator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: 'Dedicated to building a strong volunteer network and creating meaningful engagement opportunities.',
    },
  ];

  const timeline = [
    { year: '2019', event: 'Organization founded in Kigali with 5 founding members' },
    { year: '2020', event: 'First major charity drive reaches 200 families' },
    { year: '2021', event: 'Huye Chapter established, expanding our reach' },
    { year: '2022', event: 'Launch of youth mentorship program with 50 mentors' },
    { year: '2023', event: 'Musanze Chapter opens, making us nationwide' },
    { year: '2024', event: 'Reached milestone of 10,000+ youth impacted' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.8), rgba(1, 50, 32, 0.8)), url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Building a brighter future for Rwanda's youth, one seed at a time
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div {...fadeIn}>
            <Card className="h-full p-8 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-gray-600">
                To empower Rwandan youth through education, skills training, and leadership development while providing support to vulnerable communities across the nation.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
            <Card className="h-full p-8 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-gray-600">
                A Rwanda where every young person has the opportunity to thrive, contribute meaningfully to society, and create lasting positive change in their communities.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card className="h-full p-8 text-center">
              <div className="bg-primary text-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Values</h3>
              <p className="text-gray-600">
                Integrity, collaboration, youth empowerment, community service, innovation, and sustainable development guide everything we do.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section dark>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to nationwide impact
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              {...fadeIn}
              transition={{ delay: index * 0.1 }}
              className="flex items-start mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-24 text-right mr-8">
                <span className="text-2xl font-bold text-accent">{item.year}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full mt-2 mr-8"></div>
              <div className="flex-1">
                <p className="text-lg text-gray-300">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div {...fadeIn} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Leadership</h2>
          <p className="text-xl text-gray-600">Meet the dedicated team driving our mission forward</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div key={leader.name} {...fadeIn} transition={{ delay: index * 0.1 }}>
              <Card>
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-3">{leader.role}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
