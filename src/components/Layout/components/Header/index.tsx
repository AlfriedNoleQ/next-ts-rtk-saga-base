import React from 'react'
import * as S from '@components/Layout/components/Header/styles'
import Link from 'next/link'

interface HeaderProps {}

const menuList = [
  {
    title: 'Home',
    icons: '',
    url: '/home'
  },
  {
    title: 'About',
    icons: '',
    url: '/about'
  },
  {
    title: 'Profile',
    icons: '',
    url: '/profile'
  }
]

const Header: React.FC<HeaderProps> = () => {
  const user: boolean = false

  return (
    <S.Wrapper>
      <div className="flex justify-between items-center py-4 bg-slate-900 fixed w-full z-10">
        <div className="flex-shrink-0 ml-10 cursor-pointer">
          <i className="text-orange-500"></i>
          <Link href={`/`}>
            <span className="logo ml-1 text-xl text-blue-200 font-semibold uppercase">
              Alfried Nole
            </span>
          </Link>
        </div>
        {user ? (
          <ul className="flex justify-around">
            {menuList.map(item => (
              <li
                className="mr-6 p-1 text-amber-50 font-semibold uppercase hover:text-amber-400"
                key={item.title}
              >
                <Link href={'#'}>{item.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="auth__wrapper">
            <ul className="flex justify-around">
              <li className="mr-6 p-1 text-amber-50 font-semibold uppercase hover:text-amber-400">
                <Link href={'/auth/login'}>Login</Link>
              </li>
              <li className="mr-6 p-1 text-amber-50 font-semibold uppercase hover:text-amber-400">
                <Link href={'/auth/register'}>Register</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </S.Wrapper>
  )
}

export default Header
