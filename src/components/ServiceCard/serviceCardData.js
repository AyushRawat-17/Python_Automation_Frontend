import awsicon from '../../images/aws.svg'
import apacheicon from '../../images/apache.svg'
import dockericon from '../../images/docker.svg'
import redhaticon from '../../images/redhat-icon.svg'
import hadoopicon from '../../images/apache_hadoop-icon.svg'

const serviceCardData = [
    {
        id: 1,
        iconImage:awsicon,
        cardText:"Manage AWS",
        navpath: '/aws'
    },
    {
        id: 2,
        iconImage:apacheicon,
        cardText:"Manage Apache Webserver",
        navpath: '/webserver'
    },
    {
        id: 3,
        iconImage:dockericon,
        cardText:"Manage Docker",
        navpath: '/docker'
    },
    {
        id: 4,
        iconImage:redhaticon,
        cardText:"Manage Linux",
        navpath: '/linux'
    },
    {
        id: 5,
        iconImage:hadoopicon,
        cardText:"Manage Hadoop Cluster" ,
        navpath: '/hadoop'
    },
];

export default serviceCardData;