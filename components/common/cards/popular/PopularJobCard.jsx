import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const defaultEmployerLogo = 'https://beeimg.com/images/v00222030204.webp';
  return (
    <TouchableOpacity style={[styles.container(selectedJob, item), { overflow: 'hidden' }]} onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo) ? item.employer_logo : defaultEmployerLogo,
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
