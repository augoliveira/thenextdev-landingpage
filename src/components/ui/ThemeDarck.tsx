'use client'

import { useEffect , useState } from 'react'
import { ButtonTheme } from './ButtonTheme'

export default function ThemeDarck() {
  const LOCAL_KEY ='theme';
  const [isDark, setIsDark] = useState(
    JSON.parse(localstorage.getItem(LOCAL_KEY) || 'true')
  );

    useEffect(() => {
      localstorage.setItem(LOCAL_KEY, JSON.stringify(isDark));
    }, [isDark])

    const setTheme = () => {
      setIsDark(!isDark);
    }

  return (
    <div className={`transition-all duration-700 w-screen h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className={`transition-all duration-700 flex flex-col h-full justify-center items-center ${isDark ? 'text-white' : 'text-black'}`}>
        <h1 className="text-5xl m-3">DarkMode</h1>
      </div>
    </div>
  )
}
