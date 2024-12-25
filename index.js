import React, { useState, useEffect } from 'react';
import { Music, Terminal, Book, Trophy, User, Mail, Linkedin, Github, BookOpen } from 'lucide-react';

// Sample blog posts - you can replace these with your own
const blogPosts = [
  {
    id: 1,
    title: "Web Application Penetration Testing Guide",
    date: "2024-03-20",
    preview: "A comprehensive guide to testing web applications for security vulnerabilities...",
    content: "Content of the blog post goes here...",
    tags: ["Security", "Web", "Pentesting"]
  },
  {
    id: 2,
    title: "CTF Walkthrough: Breaking the Code",
    date: "2024-03-15",
    preview: "A detailed walkthrough of how I solved the recent CTF challenge...",
    content: "Content of the blog post goes here...",
    tags: ["CTF", "Writeup", "Hacking"]
  }
];

const Portfolio = () => {
  const [currentTrack, setCurrentTrack] = useState({
    title: "Cyberpunk 2077 - Never Fade Away",
    artist: "SAMURAI"
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Previous components remain the same until the Blog section

  const BlogPost = ({ post }) => (
    <div className="bg-black/30 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
         onClick={() => setSelectedPost(post)}>
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-purple-300">{post.title}</h3>
        <span className="text-sm text-purple-400">{post.date}</span>
      </div>
      <p className="mt-2 text-gray-300">{post.preview}</p>
      <div className="mt-4 flex gap-2">
        {post.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  const BlogModal = ({ post, onClose }) => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/30">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-purple-300">{post.title}</h2>
          <button onClick={onClose} className="text-purple-400 hover:text-purple-300">
            ✕
          </button>
        </div>
        <div className="prose prose-invert max-w-none">
          {post.content}
        </div>
        <div className="mt-4 flex gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 text-gray-100 font-mono">
      {/* Navbar - Add Blog link */}
      <nav className="fixed w-full bg-black/30 backdrop-blur-sm border-b border-purple-500/30 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-purple-400">ZerZex</div>
            
            <button 
              className="md:hidden text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>

            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-purple-400 hover:text-purple-300">About</a>
              <a href="#experience" className="text-purple-400 hover:text-purple-300">Experience</a>
              <a href="#blog" className="text-purple-400 hover:text-purple-300">Blog</a>
              <a href="#achievements" className="text-purple-400 hover:text-purple-300">Achievements</a>
              <a href="#contact" className="text-purple-400 hover:text-purple-300">Contact</a>
            </div>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4`}>
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-purple-400 hover:text-purple-300">About</a>
              <a href="#experience" className="text-purple-400 hover:text-purple-300">Experience</a>
              <a href="#blog" className="text-purple-400 hover:text-purple-300">Blog</a>
              <a href="#achievements" className="text-purple-400 hover:text-purple-300">Achievements</a>
              <a href="#contact" className="text-purple-400 hover:text-purple-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Same as before */}
      {/* ... */}

      {/* About Section - Same as before */}
      {/* ... */}

      {/* Experience Section - Same as before */}
      {/* ... */}

      {/* Blog Section - New Addition */}
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="text-purple-400" />
            <h2 className="text-3xl font-bold text-purple-400">Blog</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Same as before */}
      {/* ... */}

      {/* Contact Section - Same as before */}
      {/* ... */}

      {/* Footer - Same as before */}
      {/* ... */}

      {/* Blog Post Modal */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default Portfolio;
