import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '@/components/organisms/header';
import { Items } from '@/components/organisms/items';
import { AddButton } from '@/components/atoms/add-button';
import { EntrieForm } from '@/components/organisms/entrie-form';

const Home: NextPage = () => (
  <>
    <Head>
      <title>MyFinance</title>
    </Head>
    <EntrieForm />
    <Header />
    <AddButton text="Novo" ariaLabel="Adicionar" />
    <Items />
  </>
);

export default Home;
