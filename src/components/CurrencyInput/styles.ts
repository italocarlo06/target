import { colors, FontFamily } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  label: {
    color: colors.gray[600],
    fontFamily: FontFamily.medium,
    fontSize: 12,
  },
  input: {
    color: colors.black,
    fontFamily: FontFamily.regular,
    fontSize: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[300],
  },
})