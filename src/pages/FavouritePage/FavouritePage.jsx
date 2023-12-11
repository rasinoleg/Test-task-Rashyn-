import { CarsGallary } from 'components/CarsGallary/CarsGallery';
import { PageWrapper } from './FavouritePage.styled';

export default function FavouritePage() {
  return (
    <div>
      <PageWrapper>
        <CarsGallary />
      </PageWrapper>
    </div>
  );
}