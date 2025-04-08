import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function HaveAccount({ sign, sentence, link }: any) {
  return (
    <View>
      <Text className='text-right text-sm text-gray-500'>
        {sentence}{' '}
        <Link href={link} className='text-blue-500'>
          {sign}
        </Link>
      </Text>
    </View>
  )
}
