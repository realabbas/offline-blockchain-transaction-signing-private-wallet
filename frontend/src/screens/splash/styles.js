/* eslint-disable */

import { StyleSheet } from "react-native";
import theme from '../../theme';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.backgroundColor, padding: "10%" },
    lottieContainer: { marginTop: -200 },
    textContainer: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
    text: { color: 'rgb(245,255,245)', fontSize: 45, lineHeight: 55, fontFamily: 'Roboto-Medium' },
    focusText: { color: theme.secondaryColor },
    cta: { backgroundColor: theme.primaryColor, padding: 15, borderRadius: 20, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 100 },
    ctaText: { color: '#000', fontSize: 20, fontFamily: 'Roboto-Bold' },
    icon: { backgroundColor: theme.secondaryColor, padding: 5, borderRadius: 20 }
})

export default styles;