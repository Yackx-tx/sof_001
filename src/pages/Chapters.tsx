import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { supabase, Chapter } from '../lib/supabase';

export const Chapters = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching chapters:', error);
      } else {
        setChapters(data || []);
      }
      setLoading(false);
    };

    fetchChapters();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.8), rgba(1, 50, 32, 0.8)), url(https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Chapters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Building strong communities across Rwanda, one chapter at a time
          </motion.p>
        </div>
      </section>

      <Section>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-accent"></div>
            <p className="mt-4 text-gray-600">Loading chapters...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((chapter, index) => (
              <motion.div key={chapter.id} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <div className="overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={chapter.image_url || 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'}
                      alt={chapter.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{chapter.name}</h3>
                    <div className="flex items-start space-x-2 text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                      <span>{chapter.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{chapter.description}</p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-primary mb-3">Chapter Leader</h4>
                      <p className="font-medium text-gray-800 mb-2">{chapter.leader_name}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Mail className="w-4 h-4 text-accent" />
                          <a href={`mailto:${chapter.leader_email}`} className="hover:text-primary transition-colors">
                            {chapter.leader_email}
                          </a>
                        </div>
                        {chapter.leader_phone && (
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Phone className="w-4 h-4 text-accent" />
                            <a href={`tel:${chapter.leader_phone}`} className="hover:text-primary transition-colors">
                              {chapter.leader_phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            <motion.div {...fadeIn} transition={{ delay: chapters.length * 0.1 }}>
              <Card className="h-full flex items-center justify-center p-8 bg-gray-100 border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Coming Soon</h3>
                  <p className="text-gray-600">More chapters expanding across Rwanda</p>
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </Section>

      <Section dark>
        <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Start a Chapter?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Are you passionate about youth empowerment and community development? Help us expand our reach by starting a chapter in your community.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-dark transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </Section>
    </div>
  );
};
