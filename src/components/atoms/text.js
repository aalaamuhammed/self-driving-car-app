import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { theme } from "../../constants";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      small,
      size,
      transform,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      gray3,gray4,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      tertiary && styles.tertiary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      gray2 && styles.gray2,
      gray3 && styles.gray3,
      gray4 && styles.gray4,

      style // rewrite predefined styles
    ];
    return (
        <Text style={textStyles} {...props}>
          {children}
        </Text>
      );
    }
  }
  const styles = StyleSheet.create({
    // default style
    text: {
      fontFamily: "Rubik-Regular",
      fontSize: theme.sizes.font,
      color: theme.colors.black
    },
    // variations
    regular: {
      fontWeight: "normal",
      fontFamily: "Rubik-Regular"
    },
    bold: {
      fontWeight: "bold",
      fontFamily: "Rubik-Bold"
    },
    semibold: {
      fontWeight: "500",
      fontFamily: "Rubik-Bold"
    },
    medium: {
      fontWeight: "500",
      fontFamily: "Rubik-Medium"
    },
    light: {
      fontWeight: "200",
      fontFamily: "Rubik-Light"
    },
    // position
    center: { textAlign: "center" },
    right: { textAlign: "right" },
    // colors
    accent: { color: theme.colors.accent },
    primary: { color: theme.colors.primary },
    secondary: { color: theme.colors.secondary },
    tertiary: { color: theme.colors.tertiary },
    black: { color: theme.colors.black },
    white: { color: theme.colors.white },
    gray: { color: theme.colors.gray },
    gray2: { color: theme.colors.gray2 },
    gray3:{color:theme.colors.gray3},
    gray4:{color:theme.colors.gray4}
,
    // fonts
    h1: theme.fonts.h1,
    h2: theme.fonts.h2,
    h3: theme.fonts.h3,
    title: theme.fonts.title,
    body: theme.fonts.body,
    caption: theme.fonts.caption,
    small: theme.fonts.small
  });