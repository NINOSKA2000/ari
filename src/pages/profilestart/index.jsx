import { DataContextProvider, useAuth } from '@/Context/DataContext';
import React, { useEffect } from 'react';
import logo from '../../../public/img/logoOscuro.webp';
import Image from 'next/image';
import ProgressRegister from '@/Components/progressRegister';
import { useRouter } from 'next/navigation';
import Cloud from '@/Components/Atoms/Cloud';
import Lang from '@/Components/Atoms/Lang';

export default function Profilestart() {
  const { dataProfileStart, logout, l } = useAuth();
  const t = l.profile;

  const router = useRouter();

  useEffect(() => {
    if (!dataProfileStart) {
      router.push('/login');
    }
  }, [dataProfileStart]);

  const handleLogout = () => {
    router.push('/login');
    logout();
  };

  return (
    <DataContextProvider>
      <section className="profilestart">
        <section className="discover" />

        <section className="welcome">
          <nav>
            <fieldset>
              <Image src={logo} width={95} alt="imgRegister" />
              <Cloud imgButton="SignOut" cloudText="Sign Out" onClick={handleLogout} />
              <Lang />
            </fieldset>
            <ul>
              <li>
                <h1>{t['Welcome to ARI Seidor!']}</h1>
              </li>
              <li>
                <p> {t['Robots and people work better together']}</p>
              </li>
            </ul>
          </nav>
          <section className="formProfile ">
            <div>
              <h2>{t["let's get started"]}</h2>
              <p>{t['Fill in the following fields to complete your profile']}</p>
            </div>

            <div>
              <ProgressRegister userData={dataProfileStart} />
            </div>
          </section>
        </section>
      </section>
    </DataContextProvider>
  );
}
