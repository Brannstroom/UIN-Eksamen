import '../styles/switch.scss';

const ViewSwitch = () => (
  <div className="mid">
    <label className="rocker rocker-small">
      <input type="checkbox" />
      <span className="switch-left">Grid</span>
      <span className="switch-right">Liste</span>
    </label>
  </div>
);

export default ViewSwitch;
