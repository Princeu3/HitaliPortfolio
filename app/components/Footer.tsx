import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Mini Biography */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">À propos</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Développeur passionné avec plus de 5 ans d'expérience dans la création 
                            d'applications web modernes. Spécialisé en React, TypeScript et Node.js, 
                            je transforme vos idées en solutions digitales performantes.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link></li>
                            <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projets</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-300">
                            <p>📧 contact@monportfolio.com</p>
                            <p>📱 +33 6 12 34 56 78</p>
                            <p>📍 Paris, France</p>
                        </div>
                    </div>
                </div>

                {/* Social Networks */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold">Suivez-moi :</h4>
                            <div className="flex space-x-4">
                                <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    LinkedIn
                                </a>
                                <a href="https://github.com" className="text-gray-300 hover:text-gray-100 transition-colors">
                                    GitHub
                                </a>
                                <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    Twitter
                                </a>
                                <a href="https://instagram.com" className="text-gray-300 hover:text-pink-400 transition-colors">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                        <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
                        <div className="flex space-x-4 mt-2 md:mt-0">
                            <Link href="/mentions-legales" className="hover:text-white transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
                                Politique de confidentialité
                            </Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;