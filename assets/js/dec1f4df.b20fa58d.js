"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61972],{54852:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var n=l(49231);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(l),d=a,m=p["".concat(i,".").concat(d)]||p[d]||k[d]||r;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<r;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},90375:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>u,toc:()=>s});var n=l(48041),a=(l(49231),l(54852));const r={sidebar_position:20,title:"Google Cloud Platform"},o=void 0,u={unversionedId:"operator/oracle/gcp",id:"operator/oracle/gcp",title:"Google Cloud Platform",description:"Before deploying the application, you must first provision a kubernetes cluster",source:"@site/docs/operator/oracle/gcp.mdx",sourceDirName:"operator/oracle",slug:"/operator/oracle/gcp",permalink:"/operator/oracle/gcp",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Google Cloud Platform"},sidebar:"operator",previous:{title:"Docker",permalink:"/operator/oracle/docker"},next:{title:"Monitoring",permalink:"/operator/oracle/monitoring"}},i={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Switchboard Helm Charts",id:"switchboard-helm-charts",level:3},{value:"gcloud SDK",id:"gcloud-sdk",level:3},{value:"Grafana Domain Name",id:"grafana-domain-name",level:3},{value:"Environment",id:"environment",level:2},{value:"Setup",id:"setup",level:2},{value:"Grafana",id:"grafana",level:2},{value:"Domain Name",id:"domain-name",level:3},{value:"TLS Certificate",id:"tls-certificate",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Deploy Helm Charts",id:"deploy-helm-charts",level:3},{value:"Update",id:"update",level:3}],c={toc:s},p="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before deploying the application, you must first provision a kubernetes cluster\nwith the relevant credentials. There are no exotic requirements for this cluster\nand to date, it has be able to run on an auto pilot GKE cluster without issue."),(0,a.kt)("p",null,"A Switchboard oracle can be run on any cloud provider who offers kubernetes\nservices but this guide will currently be focused on Google Cloud. Feel free to\ncontribute to our documentation if you are running an oracle on another\nprovider. Here's some extra reading to learn more about kubernetes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/learn/what-is-kubernetes"},"What is Kubernetes?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"Kubernetes Engine Quickstart"))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"switchboard-helm-charts"},"Switchboard Helm Charts"),(0,a.kt)("p",null,"The repo below contains the kubernetes manifest to streamline the deployment.\nClone the repo below to get started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/helm-manifests sbv2-helm-manifests\ncd sbv2-helm-manifests\n")),(0,a.kt)("h3",{id:"gcloud-sdk"},"gcloud SDK"),(0,a.kt)("p",null,"You will need to install the google cloud SDK and have a Google Cloud Platform\naccount"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"Install gcloud SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/freetrial/signup/tos"},"Google Cloud Platform Registration"))),(0,a.kt)("p",null,"Verify it installed correctly with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud --version\n")),(0,a.kt)("h3",{id:"grafana-domain-name"},"Grafana Domain Name"),(0,a.kt)("p",null,"You will need a domain name to point your grafana instance at to monitor your\noracle's metrics. During setup, you will create an external IP, which you will\nneed to add to your domains DNS records. Finally we will provision a TLS\ncertificate for your domain for enhanced security."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"You will need to collect the following environment variables to inject into the\nhelm charts before deploying to Google Cloud Project. If you chose to use the\nautomated deployment, an env file will be populated with most of these variables\npopulated."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"GCP Environment Variables")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Env Variable"),(0,a.kt)("th",null,"Definition"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"CLUSTER"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - String (devnet / mainnet-beta)",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Solana cluster you will be running an oracle on (mainnet-beta/devnet)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RPC_URL"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - URL",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Solana RPC URL that must be capable of supporting websockets. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"WS_URL"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Optional")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - URL",(0,a.kt)("br",null),(0,a.kt)("b",null,"Default")," - RPC_URL",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Websocket URL to connect to a Solana RPC server. If not provided, oracle will fallback to RPC_URL")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"BACKUP_MAINNET_RPC"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Optional")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - URL",(0,a.kt)("br",null),(0,a.kt)("b",null,"Default")," - https://api.mainnet-beta.solana.com",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Backup RPC URL in case of network congestion")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ORACLE_KEY"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Public Key",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Optional")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Number (seconds)",(0,a.kt)("br",null),(0,a.kt)("b",null,"Default")," - 15",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SERVICE_ACCOUNT_BASE64"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Base64 encoded JSON file",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Base64 encoded JSON file containing the private key for your service account that has access to your google secret keypair and config bucket")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - GCP Resource Path",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Optional")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - GCP Resource Path",(0,a.kt)("br",null),(0,a.kt)("b",null,"Default")," - oracle-configs:configs.json",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Contains API keys for private API endpoints")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EXTERNAL_IP"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - IPv4 Address",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - IP Address where your grafana instance will be hosted to view metrics and oracle operating status")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GRAFANA_HOSTNAME"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Fully Qualified Domain Name",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Hostname where your grafana instance will point to")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GRAFANA_ADMIN_PASSWORD"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Optional")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - String / Password",(0,a.kt)("br",null),(0,a.kt)("b",null,"Default")," - Sbv2K8sPassword123@",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Password to admin account that allows access to your grafana instance. You can set this to whatever value you want.",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GRAFANA_TLS_CRT"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Base64 encoded CRT file",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Base64 encoded string of your TLS certificate to secure your grafana instance")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GRAFANA_TLS_KEY"),(0,a.kt)("td",null,(0,a.kt)("b",null,(0,a.kt)("u",null,"Required")),(0,a.kt)("br",null),(0,a.kt)("b",null,"Type")," - Base64 encoded private key file",(0,a.kt)("br",null),(0,a.kt)("b",null,"Description")," - Base64 encoded string of the private key used to create your TLS certificate"))))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/helm-manifests"},"switchboard-xyz/helm-manifests"),"\nrepo contains a bash script to walk through the GCP setup and output the\nrequired variables to an env file. This script is provided as a convenience\ntool, you should understand all of the commands in the script before running. To\nautomate the GCP setup, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./setup-gcloud.sh PROJECTNAME\n\n# ./setup-gcloud.sh Sbv2-Devnet-Oracle\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROJECTNAME")," will be the name of your GCP project and must contain no spaces\nor special characters")),(0,a.kt)("p",null,"The script will walk-through the google cloud setup, create your gcp project,\nadd your oracle keypair as a secret, create a service account and give it access\nto your keypair, then spin up a kubernetes cluster. The script will periodically\nprompt you for more information."),(0,a.kt)("p",null,"Upon completion you will have a file ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," containing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PROJECT"),(0,a.kt)("li",{parentName:"ul"},"DEFAULT_REGION"),(0,a.kt)("li",{parentName:"ul"},"DEFAULT_ZONE"),(0,a.kt)("li",{parentName:"ul"},"CLUSTER_NAME"),(0,a.kt)("li",{parentName:"ul"},"EXTERNAL_IP"),(0,a.kt)("li",{parentName:"ul"},"SECRET_NAME"),(0,a.kt)("li",{parentName:"ul"},"GOOGLE_PAYER_SECRET_PATH"),(0,a.kt)("li",{parentName:"ul"},"GCP_CONFIG_BUCKET"),(0,a.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_EMAIL"),(0,a.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_BASE64")),(0,a.kt)("p",null,"You will need to manually add:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLUSTER"),(0,a.kt)("li",{parentName:"ul"},"RPC_URL"),(0,a.kt)("li",{parentName:"ul"},"BACKUP_MAINNET_RPC"),(0,a.kt)("li",{parentName:"ul"},"ORACLE_KEY"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_ADMIN_PASSWORD"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Manual GCP Setup Steps")),(0,a.kt)("b",null,"Login"),(0,a.kt)("p",null,"Login to your google cloud account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth login\n")),(0,a.kt)("b",null,"Project"),(0,a.kt)("p",null,"Create a new project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud projects create switchboard-oracle-cluster --name="Switchboard Oracle"\n')),(0,a.kt)("p",null,"Set it as your default project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project switchboard-oracle-cluster\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/projects/create"},"Google - gcloud projects create")),(0,a.kt)("b",null,"gCloud Config"),(0,a.kt)("p",null,"Set the default zone using\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"list of regions and zones")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/zone us-west1-a # replace with your closest region\n")),(0,a.kt)("p",null,"Set the default region using\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"list of regions and zones")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/region us-west1 # replace with your closest region\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart#autopilot"},"Google - Set default settings for the gcloud tool")),(0,a.kt)("b",null,"Billing"),(0,a.kt)("p",null,"You will need to enable billing for the project before enabling any services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/billing/enable?project=switchboard-oracle-cluster"},"https://console.cloud.google.com/billing/enable?project=switchboard-oracle-cluster"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158867?hl=en"},"Google - APIs and billing")),(0,a.kt)("b",null,"Services"),(0,a.kt)("p",null,"Enable the relevant services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud services enable compute.googleapis.com\ngcloud services enable container.googleapis.com\ngcloud services enable iamcredentials.googleapis.com\ngcloud services enable secretmanager.googleapis.com\n")),(0,a.kt)("b",null,"External IP"),(0,a.kt)("p",null,"You will need to reserve a static IP address for your grafana instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute addresses create load-balancer --project=switchboard-oracle-cluster\ngcloud compute addresses list\n# NAME           ADDRESS/RANGE\n# load-balancer  123.123.123.123 ($LOADBALANCER_IP)\n")),(0,a.kt)("p",null,"This will be your ",(0,a.kt)("inlineCode",{parentName:"p"},"$EXTERNAL_IP")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#reserve_new_static"},"Google - Reserve a new static external IP address")),(0,a.kt)("b",null,"Service Account"),(0,a.kt)("p",null,"You will need to create a service account to access our resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud iam service-accounts create svc-account --display-name="Oracle Service Account"\ngcloud iam service-accounts list\n')),(0,a.kt)("p",null,"Now save it to our filesystem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud iam service-accounts keys create secrets/svc-account.json  --iam-account=svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com\n")),(0,a.kt)("p",null,"Now convert the json file to a base64 string to store in\n",(0,a.kt)("inlineCode",{parentName:"p"},"$SERVICE_ACCOUNT_BASE64")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"base64 secrets/svc-account.json\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Google - Creating service account keys")),(0,a.kt)("b",null,"OraclePayerSecret"),(0,a.kt)("p",null,"You will need to store your solana keypair in Google Secret Manager for enhanced\nsecurity. If you are using another keypair replace ",(0,a.kt)("inlineCode",{parentName:"p"},"--data-file")," with your\nrelevant path."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud secrets create oracle-payer-secret --replication-policy="automatic"  --data-file=secrets/authority-keypair.json\n')),(0,a.kt)("p",null,"You can view your ",(0,a.kt)("inlineCode",{parentName:"p"},"$GOOGLE_PAYER_SECRET_PATH")," in the\n",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/security/secret-manager/secret/oracle-payer-secret/versions&project=switchboard-oracle-cluster"},"GCP console"),"\nor by running the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"$(gcloud secrets list --uri --filter=oracle-payer-secret | \\\ncut -c41- | tr -d '\\n')/versions/latest\"\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"},"Google - Creating a secret")),(0,a.kt)("b",null,"Storage Bucket"),(0,a.kt)("p",null,"You can create a GCP storage bucket to store API keys. The following command\nwill create a new storage bucket and give your service account permissions to\nread from it. You will need to use a unique name as storage bucket names are\nglobal to the entire GCP platform."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gsutil mb -p switchboard-oracle-cluster -l us-west1 gs://switchboard-oracle-cluster-bucket\ngsutil iam ch serviceAccount:svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com:legacyBucketReader gs://switchboard-oracle-cluster-bucket\ngsutil ls\n# gs://switchboard-oracle-cluster-bucket/\n")),(0,a.kt)("p",null,"You can view your ",(0,a.kt)("inlineCode",{parentName:"p"},"$GCP_CONFIG_BUCKET")," by running the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"$(gsutil ls | grep 'switchboard-oracle-cluster-bucket' | \\\nsed -e 's/.*gs:\\/\\/\\(.*\\)\\/.*/\\1/' ):configs.json\"\n# switchboard-oracle-cluster-bucket:configs.json\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-gsutil"},"Google - Create storage buckets")),(0,a.kt)("b",null,"Kubernetes Cluster"),(0,a.kt)("p",null,"Finally you will need to create a new kubernetes cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create-auto switchboard-cluster \\\n--service-account=svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com \\\n--region us-west1\n")),(0,a.kt)("p",null,"then connect to it and store your credentials in your gCloud config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials switchboard-cluster \\\n--project switchboard-oracle-cluster \\\n--region us-west1\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Remember to update the region to the same region you used for your static IP.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart#autopilot"},"Google - Create a GKE cluster")),(0,a.kt)("b",null,"Wrapping Up"),(0,a.kt)("p",null,"You should now have an ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file containing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EXTERNAL_IP"),(0,a.kt)("li",{parentName:"ul"},"GOOGLE_PAYER_SECRET_PATH"),(0,a.kt)("li",{parentName:"ul"},"GCP_CONFIG_BUCKET"),(0,a.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_BASE64")),(0,a.kt)("p",null,"You will need to manually add:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLUSTER"),(0,a.kt)("li",{parentName:"ul"},"RPC_URL"),(0,a.kt)("li",{parentName:"ul"},"BACKUP_MAINNET_RPC"),(0,a.kt)("li",{parentName:"ul"},"ORACLE_KEY"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_ADMIN_PASSWORD"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY"))),(0,a.kt)("h2",{id:"grafana"},"Grafana"),(0,a.kt)("p",null,"Grafana is a visualization tool to view your cluster's metrics. While this step\nis optional, it is recommended if you have no other monitoring or metric suite\nin place."),(0,a.kt)("h3",{id:"domain-name"},"Domain Name"),(0,a.kt)("p",null,"You will need a domain name to host your grafana instance. In your domain\nmanagement tool, add a DNS A record with a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"$EXTERNAL_IP"),"."),(0,a.kt)("p",null,"This value will be your ",(0,a.kt)("inlineCode",{parentName:"p"},"$GRAFANA_HOSTNAME")," (i.e. grafana.switchboard.com) and\nwill be used to provision a TLS certificate."),(0,a.kt)("h3",{id:"tls-certificate"},"TLS Certificate"),(0,a.kt)("p",null,"The following steps will walk you through provisioning a TLS certificate for\nyour domain from letsencrypt. The\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/helm-manifests"},"helm-manifest repo")," contains\na script to walk through creating the neccessary keys and certificate signing\nrequest (CSR)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./setup-grafana.sh PROJECTNAME DOMAIN EMAIL\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PROJECTNAME is the name of the env file to store variables"),(0,a.kt)("li",{parentName:"ul"},"DOMAIN is your $GRAFANA_HOSTNAME from above"),(0,a.kt)("li",{parentName:"ul"},"EMAIL is the email you will use for your certificate signing request")),(0,a.kt)("p",null,"When the necessary keys and CSR are generated, head over to\n",(0,a.kt)("a",{parentName:"p",href:"https://gethttpsforfree.com.com"},"gethttpsforfree.com")," and walk through their\nsteps to sign your certificate. Save the final output to the filename given by\nthe script, then rerun the script. The script will save the env variables to\n",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," and also output them to the console."),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file should now contain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_ADMIN_PASSWORD (You can set this to whatever value you want)"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,a.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"After completing the steps on this page you should have a ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file\nwith each of the required variables defined. See\n",(0,a.kt)("a",{parentName:"p",href:"#environment"},"Google Cloud / Environment")," for a list of all required variables\nthat must be set."),(0,a.kt)("p",null,"Run the following command to build the helm charts with your environment\nvariables injected into the manifests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,a.kt)("h3",{id:"deploy-helm-charts"},"Deploy Helm Charts"),(0,a.kt)("p",null,"Run the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")),(0,a.kt)("p",null,"When complete, you should see your cluster running in the Google Cloud Console."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/stackdriver/docs/solutions/gke/observing"},"Google - Observing your GKE clusters")),(0,a.kt)("h3",{id:"update"},"Update"),(0,a.kt)("p",null,"If necessary, rebuild the charts to update any environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,a.kt)("p",null,"then redeploy the helm charts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")))}k.isMDXComponent=!0}}]);