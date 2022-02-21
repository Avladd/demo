import { createContext, useState } from "react";

type SelectedMissionsContextType = {
  selectedMissions: string[];
  setSelectedMission: (missionId: string, checked: boolean) => void;
};
const selectedMissionsContext = createContext<SelectedMissionsContextType>({
  selectedMissions: [],
  setSelectedMission: () => {
    console.error("Using default implementation for setSelectedMission");
  },
});

const SelectedMissionsContextProvider: React.FC = ({ children }) => {
  const [selectedMissions, _setSelectedMissions] = useState<string[]>([]);

  const setSelectedMission = (missionId: string, checked: boolean) => {
    if (checked) {
      if (selectedMissions.includes(missionId)) return;
      return _setSelectedMissions([missionId, ...selectedMissions]);
    }
    if (!selectedMissions.includes(missionId)) return;
    const index = selectedMissions.indexOf(missionId);
    return _setSelectedMissions([
      ...selectedMissions.slice(0, index),
      ...selectedMissions.slice(index + 1),
    ]);
  };

  return (
    <selectedMissionsContext.Provider
      value={{ selectedMissions, setSelectedMission }}
    >
      {children}
    </selectedMissionsContext.Provider>
  );
};

export default SelectedMissionsContextProvider;
export { selectedMissionsContext };
