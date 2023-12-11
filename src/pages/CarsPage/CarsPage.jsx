import { useDispatch, useSelector } from 'react-redux';
import { CarsGallary } from '../../components/CarsGallary/CarsGallery';
import { SerchForm } from '../../components/SercForm/SerchForm';
import { ContentWrapper } from '../MainPage/MainPage.styled';
import { useEffect } from 'react';
import { fetchSomeCars } from '../../redux/cars/carsOperations';
import { selectPage } from '../../redux/cars/carsSelectors';

export default function CarsPage() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  useEffect(() => {
    dispatch(fetchSomeCars(page));
  }, [dispatch, page]);

  return (
    <div>
      <ContentWrapper>
        <SerchForm />
      </ContentWrapper>
      <ContentWrapper>
        <CarsGallary />
      </ContentWrapper>
    </div>
  );
}