const React = require('react');
const ReactNative = require('react-native');
const {Component, } = React;
const {View, StyleSheet, } = ReactNative;

const SceneComponent = (Props) => {
  const {shouldUpdated, ...props, } = Props;
  return <View {...props}>
        {props.children}
  </View>;
};

module.exports = SceneComponent;
