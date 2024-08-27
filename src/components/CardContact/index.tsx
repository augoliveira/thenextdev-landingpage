'use client';

import NextImage from '../ui/NextImage';
import Link from 'next/link';

import { TelegramLogo } from 'phosphor-react';

import { ButtonAlt, Section } from '@/styles/styles';
import { CardContactContainer, CardContactContent } from './styles';

export function CardContact() {
  return (
    <Section id="contact">
      <CardContactContainer>
        <CardContactContent>
          <div className='description'>
            <h1>Vamos conversar!</h1>
            <p>
              Se você tiver dúvidas ou apenas gostaria de dizer olá, entre em
              contato comigo. Farei o possível para entrar em contato com você!
            </p>
          </div>

          <div className='contact'>
            <NextImage
              src='/contact.svg'
              width={680}
              height={580}
              alt='imagem de contato'
            />
          </div>
        </CardContactContent>

        <Link href={'/contato'}>
          <ButtonAlt>
            Entre em contato{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight='bold'
            />
          </ButtonAlt>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
