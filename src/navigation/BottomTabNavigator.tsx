import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NoteTabSVG from '@assets/icons/Tab/Note';
import MapTabSVG from '@assets/icons/Tab/Map';
import NotesTab from '@screens/Tabs/Notes';
import MapTab from '@screens/Tabs/Map';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@constants/Colors';
import { moderateScale } from 'react-native-size-matters';

type TabParamsList = {
  Notes: undefined;
  Map: undefined;
};

const Tab = createBottomTabNavigator<TabParamsList>();

const BottomTabNavigator = () => {
  const renderTabBarIcon = (iconComponent: React.ReactNode, focused: boolean) => {
    return (
      <View
        style={[
          styles.tabIconContainer,
          focused && {
            borderRadius: moderateScale(6),
            padding: moderateScale(3),
          },
        ]}
      >
        {iconComponent}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.light.text,
        tabBarInactiveTintColor: '#A9ABAD',
        tabBarStyle: {
          paddingHorizontal: moderateScale(25),
          paddingVertical: 20,
          backgroundColor: Colors.primary,
          height:60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Notes"
        component={NotesTab}
        options={{
          tabBarIcon: ({ color, focused }: any) =>
            renderTabBarIcon(<NoteTabSVG focused={focused} />, focused),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapTab}
        options={{
          tabBarIcon: ({ color, focused }: any) =>
            renderTabBarIcon(<MapTabSVG focused={focused} />, focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 20,
    minHeight: 20,
  },
  activeTabIndicator: {
    position: 'absolute',
    top: 0,
    width: '50%',
    height: 2,
    backgroundColor: Colors.primary,
  },
});
