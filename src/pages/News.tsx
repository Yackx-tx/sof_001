import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { supabase, NewsPost } from '../lib/supabase';

export const News = () => {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching news:', error);
      } else {
        setNews(data || []);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(1, 50, 32, 0.8), rgba(1, 50, 32, 0.8)), url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg)',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Stay informed about our latest initiatives, achievements, and community impact
          </motion.p>
        </div>
      </section>

      <Section>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-accent"></div>
            <p className="mt-4 text-gray-600">Loading news...</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No news articles available.</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {news.map((post, index) => (
              <motion.div key={post.id} {...fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/3">
                      <img
                        src={post.image_url || 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg'}
                        alt={post.title}
                        className="h-48 w-full md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{formatDate(post.published_at)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4 text-accent" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-primary mb-3 hover:text-primary-light transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <p className="text-gray-700 leading-relaxed">{post.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
};
