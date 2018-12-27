import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView
} from 'react-native';

class DetailScreen extends Component {
    static navigationOptions =  ({navigation}) => ({
        title: "Detail",
    })
    render () {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, elit ac egestas luctus, tortor mi molestie eros, sit amet aliquam est lorem non mauris. Aliquam cursus auctor enim, in consequat orci luctus a. Nullam volutpat nibh ultricies sem ornare laoreet. Donec nec sapien laoreet, tincidunt lacus vitae, egestas ligula. Donec in ultrices lacus, a auctor risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in mattis ipsum. Aliquam feugiat sem at lectus mollis mollis. Cras ultrices porttitor ex non ultricies. Duis in nisl non ligula semper vehicula nec vitae nisl. Aliquam ac dictum quam. Quisque vel leo tempor, vehicula arcu sed, varius erat. Nunc ornare ante ipsum, et semper nulla imperdiet a. Phasellus non diam euismod, interdum velit sit amet, tempus lacus.

                        In ornare ante a sapien ultrices, a accumsan ipsum cursus. Sed elit tellus, blandit nec augue sed, ultricies laoreet quam. Aenean elit enim, commodo et feugiat quis, dapibus sit amet velit. Cras ut justo sollicitudin massa lobortis interdum quis et purus. Nulla pharetra, orci ac imperdiet bibendum, arcu dui facilisis dui, malesuada ullamcorper arcu enim quis lorem. Suspendisse finibus risus a purus cursus, eget dignissim sem pellentesque. In diam dolor, interdum vitae augue in, finibus posuere odio. Morbi vel erat odio. Suspendisse accumsan ullamcorper est, id ultricies sapien tincidunt ut. Nullam auctor malesuada risus, sit amet tincidunt massa gravida vel.

                        Aenean pulvinar pulvinar felis non elementum. Sed ut felis sit amet ligula dictum auctor non luctus dolor. Donec dignissim tempor fermentum. Sed et arcu in nulla dignissim sagittis aliquam vitae eros. Quisque placerat, ex et lobortis fringilla, odio sapien ultrices felis, eu porta odio risus sit amet sapien. Maecenas neque lectus, pretium vel euismod in, aliquet quis ligula. Phasellus consectetur euismod est mattis semper. Vestibulum nec mauris enim. Vivamus elementum mauris ac luctus pulvinar. Nulla tempor orci eget nisl ultricies tristique. Sed facilisis velit turpis, in mollis metus venenatis venenatis. Nunc rutrum commodo mi, mollis convallis neque ultrices hendrerit. Sed semper faucibus ante quis commodo.

                        Vestibulum pulvinar ac felis ut posuere. Vestibulum condimentum lectus vel mattis tempus. Pellentesque placerat id quam id dapibus. Nunc aliquam placerat ligula, et venenatis arcu tristique non. Morbi at magna nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed quis velit dapibus, tempor sem non, vestibulum dolor. Ut aliquam eleifend ornare.

                        Nam placerat, ex non fermentum vestibulum, neque odio malesuada magna, sed luctus ipsum massa ac ex. Vestibulum accumsan diam sit amet enim blandit malesuada. Quisque vel nulla ut velit bibendum semper. Nunc in scelerisque ex. Donec ac velit sed risus pulvinar pretium vel ultricies dolor. In ut erat lacinia, laoreet lorem a, aliquam ipsum. Cras et justo accumsan, volutpat neque et, hendrerit enim.

                        Fusce consequat elit ipsum, eget euismod nulla tempor quis. Etiam viverra magna sed velit consectetur, eget consequat sem fermentum. Proin et nisi et nunc consequat sagittis. Integer gravida arcu non volutpat ultrices. Nulla sit amet varius turpis. Nunc porta non libero eget ullamcorper. Mauris id massa nec leo eleifend mollis. Aliquam at venenatis velit. Quisque consequat, nunc vitae mattis finibus, purus risus tristique dui, eget congue nisl purus sollicitudin sem. Nulla facilisi. Sed lectus velit, lobortis sit amet lectus ac, eleifend viverra tellus. Etiam ac turpis ut nibh consequat bibendum. Nunc pretium feugiat nibh eu tincidunt. Sed metus arcu, fermentum ut viverra a, feugiat non ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                        Aliquam tempor ex eu pellentesque pulvinar. Quisque posuere, ipsum et consequat scelerisque, ipsum ligula sollicitudin quam, at aliquam tellus justo vel leo. Nunc scelerisque, purus vitae vestibulum faucibus, magna odio euismod diam, ac dictum odio odio sed quam. Vestibulum sit amet dictum mauris, sed condimentum magna. Etiam mi diam, interdum dapibus interdum id, laoreet vel turpis. Fusce id mauris in arcu porta sagittis. Aenean ullamcorper enim vel est laoreet ultrices. Proin vel libero vel nulla luctus interdum. Duis finibus tellus eu massa elementum, at aliquet sem ultrices. Pellentesque lacinia at neque vitae laoreet. Quisque rhoncus justo sit amet arcu scelerisque, ut mollis orci gravida.

                        Nunc eu dui pharetra, malesuada augue quis, consequat nulla. Ut mattis tortor ac imperdiet feugiat. Praesent euismod turpis vel est volutpat, nec consequat nisi molestie. Proin ullamcorper mauris vel ligula ultricies, pretium dapibus nulla pharetra. Aenean eget nisl eu ante sollicitudin laoreet. Vivamus maximus justo non nunc pellentesque mollis. Vestibulum nec neque urna. Quisque viverra ipsum eget mi egestas, ac venenatis tellus scelerisque. Maecenas vestibulum ipsum eu purus efficitur lacinia. Sed dictum nibh quis augue porta dignissim. Cras lorem dui, dictum eget sollicitudin vitae, tempor eu tellus. Nulla enim magna, fermentum id purus non, viverra suscipit lectus. Quisque eu finibus diam.

                        Aliquam sagittis dolor ac diam euismod, elementum fermentum ex condimentum. Donec accumsan augue a felis efficitur, ac suscipit tortor varius. Sed tempor malesuada sem et ornare. Cras urna dui, egestas finibus luctus sit amet, maximus non nibh. Quisque et mi ac mauris venenatis lobortis vel at quam. Mauris eros orci, maximus efficitur lacus a, pharetra pharetra elit. Morbi id libero ut metus malesuada bibendum id sit amet lectus. Pellentesque congue id ipsum vel volutpat.

                        Aliquam erat volutpat. Pellentesque viverra id sapien sit amet pharetra. Curabitur eu metus lobortis, tincidunt massa et, fringilla lorem. Pellentesque accumsan fringilla quam eget imperdiet. Nunc porta nisl eget tempor auctor. Aenean ut tortor dictum, pharetra quam eu, pretium erat. Maecenas sollicitudin ornare libero, at lacinia enim aliquet et. Fusce condimentum massa vel leo eleifend consectetur vitae eu leo. Morbi sit amet nibh leo. Vivamus id pretium neque. Maecenas hendrerit suscipit euismod.</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
});

export default DetailScreen;