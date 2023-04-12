import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Finish } from "../screens/Finish";
import { History } from "../screens/History";
import { Home } from "../screens/Home";
import { Quiz } from "../screens/Quiz";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="history" component={History} />

      <Group screenOptions={{ gestureEnabled: false }}>
        <Screen name="quiz" component={Quiz} />
        <Screen name="finish" component={Finish} />
      </Group>
    </Navigator>
  );
}
