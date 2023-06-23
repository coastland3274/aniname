import type { FC } from 'react';
import CustomHead from '@/components/CustomHead';
import NotFound from '@/components/NotFound';

const _404Page: FC = () => {
  return (
    <>
      <CustomHead noindex={true} />
      <NotFound />
    </>
  );
};

export default _404Page;
