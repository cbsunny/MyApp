import {
    StyleSheet
} from 'react-native';

export let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    listView: {
        marginTop: 30,
        flex: 1,
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    },
    listItem: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        flexDirection:'row',
        borderBottomColor:'#CCCCCC',//cell的分割线
        borderBottomWidth:1
    }
});