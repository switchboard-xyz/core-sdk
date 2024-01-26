"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8338],{54852:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||o;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(432),a=(n(49231),n(54852));const o={slug:"./other-commands",title:"Other Commands",keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},i=void 0,l={unversionedId:"node-operator/other-commands",id:"node-operator/other-commands",title:"Other Commands",description:"Grep for a pod name",source:"@site/docs/800-node-operator/30-other-commands.mdx",sourceDirName:"800-node-operator",slug:"/node-operator/other-commands",permalink:"/node-operator/other-commands",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"./other-commands",title:"Other Commands",keywords:["Solana","Solana SDK","Oracles","Web3","Off-chain","Randomness"]},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/node-operator/deployment"},next:{title:"More TEE & SGX",permalink:"/info/more-tee-sgx"}},s={},c=[{value:"Grep for a pod name",id:"grep-for-a-pod-name",level:3},{value:"Watch logs for a specific pod, grepping for name",id:"watch-logs-for-a-specific-pod-grepping-for-name",level:3},{value:"Setting up workload identity",id:"setting-up-workload-identity",level:3},{value:"Preparing helm",id:"preparing-helm",level:3},{value:"Installing observability stack",id:"installing-observability-stack",level:3},{value:"Installing networking stack",id:"installing-networking-stack",level:3},{value:"Installing infisical secrets manager",id:"installing-infisical-secrets-manager",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"grep-for-a-pod-name"},"Grep for a pod name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grep_pod() {\n    kubectl get pods | awk '{print $1}' | grep --color=never -E \"$1\"\n}\n")),(0,a.kt)("h3",{id:"watch-logs-for-a-specific-pod-grepping-for-name"},"Watch logs for a specific pod, grepping for name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pod_log() {\n    local pod=$(grep_pod "$1" | head -1)\n    echo $pod\n    sleep 1\n    kubectl logs -f $pod ${@: 2}\n}\n')),(0,a.kt)("h3",{id:"setting-up-workload-identity"},"Setting up workload identity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'gcloud iam service-accounts add-iam-policy-binding coredao-oracle@sbv2-coredao-testnet.iam.gserviceaccount.com \\\n    --role roles/iam.workloadIdentityUser \\\n    --member "serviceAccount:sbv2-coredao-testnet.svc.id.goog[default/oracle-service-account]" \\\n    --project=sbv2-coredao-testnet\n\n\n')),(0,a.kt)("h3",{id:"preparing-helm"},"Preparing helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add vm https://victoriametrics.github.io/helm-charts/\n\nhelm repo add grafana https://grafana.github.io/helm-charts\n\nhelm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\n\nhelm repo add jetstack https://charts.jetstack.io\n\nhelm repo add infisical-helm-charts 'https://dl.cloudsmith.io/public/infisical/helm-charts/helm/charts/' \n")),(0,a.kt)("h3",{id:"installing-observability-stack"},"Installing observability stack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm upgrade -i grafana grafana/grafana -f grafana-values.yaml\n\nhelm upgrade -i vmsingle vm/victoria-metrics-single -f vmetrics-values.yaml\n")),(0,a.kt)("h3",{id:"installing-networking-stack"},"Installing networking stack"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.12.3 \\\n  --set installCRDs=true \\\n  --set global.leaderElection.namespace=cert-manager\n\nhelm install ingress-nginx ingress-nginx/ingress-nginx \\\n  --namespace ingress-nginx \\\n  --create-namespace \\\n  --timeout 600s \\\n  --debug \\\n  -f nginx-values.yaml\n")),(0,a.kt)("h3",{id:"installing-infisical-secrets-manager"},"Installing infisical secrets manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm install secrets-operator infisical-helm-charts/secrets-operator --version=0.3.3 --set controllerManager.manager.image.tag=v0.3.0\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/infisical/kubernetes-operator/tags"},"https://hub.docker.com/r/infisical/kubernetes-operator/tags")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudsmith.io/~infisical/repos/helm-charts/packages/detail/helm/secrets-operator/#versions"},"https://cloudsmith.io/~infisical/repos/helm-charts/packages/detail/helm/secrets-operator/#versions")))}d.isMDXComponent=!0}}]);