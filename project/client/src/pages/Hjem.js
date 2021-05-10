import LoadMoreButton from '../components/LoadMoreButton';
import Posts from '../components/Posts';
import ViewSwitch from '../components/ViewSwitch';

export default function Hjem() {
  return (
    <>
      <ViewSwitch />
      <Posts />
      <LoadMoreButton />
    </>
  );
}
