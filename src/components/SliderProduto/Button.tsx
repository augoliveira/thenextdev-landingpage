import Link from 'next/link';
import React from 'react'

type Props = {
  link: string;
  text: string;
};

const Button = ({link, text}: Props) => {
  return (
    <Link href={link}className="btn">{text}</Link>
  )
}

export default Button