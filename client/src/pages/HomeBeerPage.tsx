import BeerOptions from '../components/BeerOptions';
import BeerInformationBox from '../components/BeerInformationBox';

type Props = {};
const HomeBeerPage = (props: Props) => {
  return (
    <div>
      HomeBeerPage
      <BeerOptions />
      <BeerInformationBox type="bar" />
      <BeerInformationBox type="brewery" />
    </div>
  );
};
export default HomeBeerPage;
