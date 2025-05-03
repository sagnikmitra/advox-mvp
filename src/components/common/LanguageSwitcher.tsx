import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const languages = [
  { id: 'en', name: 'English', nativeName: 'English' },
  { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLanguage = languages.find(lang => lang.id === i18n.language) || languages[0];

  const changeLanguage = (langId: string) => {
    i18n.changeLanguage(langId);
  };

  return (
    <div className="relative">
      <Listbox value={selectedLanguage.id} onChange={changeLanguage}>
        {({ open }) => (
          <>
            <Listbox.Button 
              className="flex items-center text-sm font-medium text-neutral-700 hover:text-primary-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Globe className="h-4 w-4 mr-1.5" />
              <span>{selectedLanguage.nativeName}</span>
              <ChevronDown className="h-4 w-4 ml-1.5" />
            </Listbox.Button>
            
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none right-0"
              >
                <Listbox.Options static className="py-1">
                  {languages.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      value={language.id}
                      className={({ active }) =>
                        `${active ? 'bg-primary-50 text-primary-600' : 'text-neutral-800'} 
                         relative cursor-pointer select-none py-2 px-4 text-sm flex items-center justify-between`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className={`${selected ? 'font-medium' : 'font-normal'}`}>
                            {language.nativeName}
                          </span>
                          {selected && (
                            <Check className="h-4 w-4 text-primary-600" />
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </motion.div>
            )}
          </>
        )}
      </Listbox>
    </div>
  );
};

export default LanguageSwitcher;