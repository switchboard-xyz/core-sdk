"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99316],{54852:(t,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>N});var r=n(49231);function e(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function l(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){e(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t,a){if(null==t)return{};var n,r,e=function(t,a){if(null==t)return{};var n,r,e={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(e[n]=t[n]);return e}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var o=r.createContext({}),p=function(t){var a=r.useContext(o),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},u=function(t){var a=p(t.components);return r.createElement(o.Provider,{value:a},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(t,a){var n=t.components,e=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),m=p(n),g=e,N=m["".concat(o,".").concat(g)]||m[g]||k[g]||l;return n?r.createElement(N,i(i({ref:a},u),{},{components:n})):r.createElement(N,i({ref:a},u))}));function N(t,a){var n=arguments,e=a&&a.mdxType;if("string"==typeof t||e){var l=n.length,i=new Array(l);i[0]=g;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=t,d[m]="string"==typeof t?t:e,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79358:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(48041),e=(n(49231),n(54852));const l={sidebar_position:50,title:"Errors"},i=void 0,d={unversionedId:"solana/idl/errors",id:"solana/idl/errors",title:"Errors",description:"Anchor Errors",source:"@site/docs/solana/idl/errors.md",sourceDirName:"solana/idl",slug:"/solana/idl/errors",permalink:"/solana/idl/errors",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Errors"},sidebar:"solana",previous:{title:"VrfStatus",permalink:"/solana/idl/types/VrfStatus"}},o={},p=[{value:"Anchor Errors",id:"anchor-errors",level:2},{value:"Switchboard Errors",id:"switchboard-errors",level:2}],u={toc:p},m="wrapper";function k(t){let{components:a,...n}=t;return(0,e.kt)(m,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,e.kt)("h2",{id:"anchor-errors"},"Anchor Errors"),(0,e.kt)("p",null,"See ",(0,e.kt)("a",{parentName:"p",href:"https://anchor.so/errors"},"anchor.so/errors")," for a list of built-in Anchor\nerrors."),(0,e.kt)("h2",{id:"switchboard-errors"},"Switchboard Errors"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"Code"),(0,e.kt)("th",{parentName:"tr",align:null},"Hex"),(0,e.kt)("th",{parentName:"tr",align:null},"Name"),(0,e.kt)("th",{parentName:"tr",align:null},"Message"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6000"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1770"),(0,e.kt)("td",{parentName:"tr",align:null},"ArrayOperationError"),(0,e.kt)("td",{parentName:"tr",align:null},"Illegal operation on a Switchboard array.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6001"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1771"),(0,e.kt)("td",{parentName:"tr",align:null},"QueueOperationError"),(0,e.kt)("td",{parentName:"tr",align:null},"Illegal operation on a Switchboard queue.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6002"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1772"),(0,e.kt)("td",{parentName:"tr",align:null},"IncorrectProgramOwnerError"),(0,e.kt)("td",{parentName:"tr",align:null},"An account required to be owned by the program has a different owner.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6003"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1773"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidAggregatorRound"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator is not currently populated with a valid round.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6004"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1774"),(0,e.kt)("td",{parentName:"tr",align:null},"TooManyAggregatorJobs"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator cannot fit any more jobs.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6005"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1775"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorCurrentRoundClosed"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator's current round is closed. No results are being accepted.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6006"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1776"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorInvalidSaveResult"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator received an invalid save result instruction.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6007"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1777"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidStrDecimalConversion"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to convert string to decimal format.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6008"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1778"),(0,e.kt)("td",{parentName:"tr",align:null},"AccountLoaderMissingSignature"),(0,e.kt)("td",{parentName:"tr",align:null},"AccountLoader account is missing a required signature.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6009"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1779"),(0,e.kt)("td",{parentName:"tr",align:null},"MissingRequiredSignature"),(0,e.kt)("td",{parentName:"tr",align:null},"Account is missing a required signature.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6010"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177a"),(0,e.kt)("td",{parentName:"tr",align:null},"ArrayOverflowError"),(0,e.kt)("td",{parentName:"tr",align:null},"The attempted action will overflow a zero-copy account array.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6011"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177b"),(0,e.kt)("td",{parentName:"tr",align:null},"ArrayUnderflowError"),(0,e.kt)("td",{parentName:"tr",align:null},"The attempted action will underflow a zero-copy account array.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6012"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177c"),(0,e.kt)("td",{parentName:"tr",align:null},"PubkeyNotFoundError"),(0,e.kt)("td",{parentName:"tr",align:null},"The queried public key was not found.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6013"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177d"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorIllegalRoundOpenCall"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator round open called too early.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6014"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177e"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorIllegalRoundCloseCall"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator round close called too early.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6015"),(0,e.kt)("td",{parentName:"tr",align:null},"0x177f"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorClosedError"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator is closed. Illegal action.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6016"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1780"),(0,e.kt)("td",{parentName:"tr",align:null},"IllegalOracleIdxError"),(0,e.kt)("td",{parentName:"tr",align:null},"Illegal oracle index.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6017"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1781"),(0,e.kt)("td",{parentName:"tr",align:null},"OracleAlreadyRespondedError"),(0,e.kt)("td",{parentName:"tr",align:null},"The provided oracle has already responded this round.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6018"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1782"),(0,e.kt)("td",{parentName:"tr",align:null},"ProtoDeserializeError"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to deserialize protocol buffer.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6019"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1783"),(0,e.kt)("td",{parentName:"tr",align:null},"UnauthorizedStateUpdateError"),(0,e.kt)("td",{parentName:"tr",align:null},"Unauthorized program state modification attempted.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6020"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1784"),(0,e.kt)("td",{parentName:"tr",align:null},"MissingOracleAccountsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Not enough oracle accounts provided to closeRounds.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6021"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1785"),(0,e.kt)("td",{parentName:"tr",align:null},"OracleMismatchError"),(0,e.kt)("td",{parentName:"tr",align:null},"An unexpected oracle account was provided for the transaction.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6022"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1786"),(0,e.kt)("td",{parentName:"tr",align:null},"CrankMaxCapacityError"),(0,e.kt)("td",{parentName:"tr",align:null},"Attempted to push to a Crank that's at capacity")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6023"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1787"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorLeaseInsufficientFunds"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator update call attempted but attached lease has insufficient funds.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6024"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1788"),(0,e.kt)("td",{parentName:"tr",align:null},"IncorrectTokenAccountMint"),(0,e.kt)("td",{parentName:"tr",align:null},"The provided token account does not point to the Switchboard token mint.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6025"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1789"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidEscrowAccount"),(0,e.kt)("td",{parentName:"tr",align:null},"An invalid escrow account was provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6026"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178a"),(0,e.kt)("td",{parentName:"tr",align:null},"CrankEmptyError"),(0,e.kt)("td",{parentName:"tr",align:null},"Crank empty. Pop failed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6027"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178b"),(0,e.kt)("td",{parentName:"tr",align:null},"PdaDeriveError"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to derive a PDA from the provided seed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6028"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178c"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorAccountNotFound"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator account missing from provided account list.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6029"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178d"),(0,e.kt)("td",{parentName:"tr",align:null},"PermissionAccountNotFound"),(0,e.kt)("td",{parentName:"tr",align:null},"Permission account missing from provided account list.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6030"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178e"),(0,e.kt)("td",{parentName:"tr",align:null},"LeaseAccountDeriveFailure"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to derive a lease account.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6031"),(0,e.kt)("td",{parentName:"tr",align:null},"0x178f"),(0,e.kt)("td",{parentName:"tr",align:null},"PermissionAccountDeriveFailure"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to derive a permission account.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6032"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1790"),(0,e.kt)("td",{parentName:"tr",align:null},"EscrowAccountNotFound"),(0,e.kt)("td",{parentName:"tr",align:null},"Escrow account missing from provided account list.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6033"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1791"),(0,e.kt)("td",{parentName:"tr",align:null},"LeaseAccountNotFound"),(0,e.kt)("td",{parentName:"tr",align:null},"Lease account missing from provided account list.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6034"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1792"),(0,e.kt)("td",{parentName:"tr",align:null},"DecimalConversionError"),(0,e.kt)("td",{parentName:"tr",align:null},"Decimal conversion method failed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6035"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1793"),(0,e.kt)("td",{parentName:"tr",align:null},"PermissionDenied"),(0,e.kt)("td",{parentName:"tr",align:null},"Permission account is missing required flags for the given action.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6036"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1794"),(0,e.kt)("td",{parentName:"tr",align:null},"QueueAtCapacity"),(0,e.kt)("td",{parentName:"tr",align:null},"Oracle queue is at lease capacity.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6037"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1795"),(0,e.kt)("td",{parentName:"tr",align:null},"ExcessiveCrankRowsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Data feed is already pushed on a crank.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6038"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1796"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorLockedError"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator is locked, no setting modifications or job additions allowed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6039"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1797"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorInvalidBatchSizeError"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator invalid batch size.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6040"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1798"),(0,e.kt)("td",{parentName:"tr",align:null},"AggregatorJobChecksumMismatch"),(0,e.kt)("td",{parentName:"tr",align:null},"Oracle provided an incorrect aggregator job checksum.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6041"),(0,e.kt)("td",{parentName:"tr",align:null},"0x1799"),(0,e.kt)("td",{parentName:"tr",align:null},"IntegerOverflowError"),(0,e.kt)("td",{parentName:"tr",align:null},"An integer overflow occurred.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6042"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179a"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidUpdatePeriodError"),(0,e.kt)("td",{parentName:"tr",align:null},"Minimum update period is 5 seconds.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6043"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179b"),(0,e.kt)("td",{parentName:"tr",align:null},"NoResultsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Aggregator round evaluation attempted with no results.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6044"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179c"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidExpirationError"),(0,e.kt)("td",{parentName:"tr",align:null},"An expiration constraint was broken.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6045"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179d"),(0,e.kt)("td",{parentName:"tr",align:null},"InsufficientStakeError"),(0,e.kt)("td",{parentName:"tr",align:null},"An account provided insufficient stake for action.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6046"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179e"),(0,e.kt)("td",{parentName:"tr",align:null},"LeaseInactiveError"),(0,e.kt)("td",{parentName:"tr",align:null},"The provided lease account is not active.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6047"),(0,e.kt)("td",{parentName:"tr",align:null},"0x179f"),(0,e.kt)("td",{parentName:"tr",align:null},"NoAggregatorJobsFound"),(0,e.kt)("td",{parentName:"tr",align:null},"No jobs are currently included in the aggregator.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6048"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a0"),(0,e.kt)("td",{parentName:"tr",align:null},"IntegerUnderflowError"),(0,e.kt)("td",{parentName:"tr",align:null},"An integer underflow occurred.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6049"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a1"),(0,e.kt)("td",{parentName:"tr",align:null},"OracleQueueMismatch"),(0,e.kt)("td",{parentName:"tr",align:null},"An invalid oracle queue account was provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6050"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a2"),(0,e.kt)("td",{parentName:"tr",align:null},"OracleWalletMismatchError"),(0,e.kt)("td",{parentName:"tr",align:null},"An unexpected oracle wallet account was provided for the transaction.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6051"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a3"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidBufferAccountError"),(0,e.kt)("td",{parentName:"tr",align:null},"An invalid buffer account was provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6052"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a4"),(0,e.kt)("td",{parentName:"tr",align:null},"InsufficientOracleQueueError"),(0,e.kt)("td",{parentName:"tr",align:null},"Insufficient oracle queue size.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6053"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a5"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidAuthorityError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid authority account provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6054"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a6"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidTokenAccountMintError"),(0,e.kt)("td",{parentName:"tr",align:null},"A provided token wallet is associated with an incorrect mint.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6055"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a7"),(0,e.kt)("td",{parentName:"tr",align:null},"ExcessiveLeaseWithdrawlError"),(0,e.kt)("td",{parentName:"tr",align:null},"You must leave enough funds to perform at least 1 update in the lease.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6056"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a8"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalideHistoryAccountError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid history account provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6057"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17a9"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidLeaseAccountEscrowError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid lease account escrow.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6058"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17aa"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidCrankAccountError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid crank provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6059"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ab"),(0,e.kt)("td",{parentName:"tr",align:null},"CrankNoElementsReadyError"),(0,e.kt)("td",{parentName:"tr",align:null},"No elements ready to be popped.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6060"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ac"),(0,e.kt)("td",{parentName:"tr",align:null},"IndexOutOfBoundsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Index out of bounds")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6061"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ad"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfInvalidRequestError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid vrf request params")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6062"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ae"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfInvalidProofSubmissionError"),(0,e.kt)("td",{parentName:"tr",align:null},"Vrf proof failed to verify")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6063"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17af"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfVerifyError"),(0,e.kt)("td",{parentName:"tr",align:null},"Error in verifying vrf proof.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6064"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b0"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfCallbackError"),(0,e.kt)("td",{parentName:"tr",align:null},"Vrf callback function failed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6065"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b1"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfCallbackParamsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid vrf callback params provided.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6066"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b2"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfCallbackAlreadyCalledError"),(0,e.kt)("td",{parentName:"tr",align:null},"Vrf callback has already been triggered.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6067"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b3"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfInvalidPubkeyError"),(0,e.kt)("td",{parentName:"tr",align:null},"The provided pubkey is invalid to use in ecvrf proofs")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6068"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b4"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfTooManyVerifyCallsError"),(0,e.kt)("td",{parentName:"tr",align:null},"Number of required verify calls exceeded")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6069"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b5"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfRequestAlreadyLaunchedError"),(0,e.kt)("td",{parentName:"tr",align:null},"Vrf request is already pending")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6070"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b6"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfInsufficientVerificationError"),(0,e.kt)("td",{parentName:"tr",align:null},"Insufficient amount of proofs collected for VRF callback")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6071"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b7"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidVrfProducerError"),(0,e.kt)("td",{parentName:"tr",align:null},"An incorrect oracle attempted to submit a proof")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6072"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b8"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidGovernancePidError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid SPLGovernance Account Supplied")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6073"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17b9"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidGovernanceAccountError"),(0,e.kt)("td",{parentName:"tr",align:null},"An Invalid Governance Account was supplied")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6074"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ba"),(0,e.kt)("td",{parentName:"tr",align:null},"MissingOptionalAccount"),(0,e.kt)("td",{parentName:"tr",align:null},"Expected an optional account")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6075"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17bb"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidSpawnRecordOwner"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid Owner for Spawn Record")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6076"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17bc"),(0,e.kt)("td",{parentName:"tr",align:null},"NoopError"),(0,e.kt)("td",{parentName:"tr",align:null},"Noop error")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6077"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17bd"),(0,e.kt)("td",{parentName:"tr",align:null},"MissingRequiredAccountsError"),(0,e.kt)("td",{parentName:"tr",align:null},"A required instruction account was not included")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6078"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17be"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidMintError"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid mint account passed for instruction")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6079"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17bf"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidTokenAccountKeyError"),(0,e.kt)("td",{parentName:"tr",align:null},"An invalid token account was passed into the instruction")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6080"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c0"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidJobAccountError"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6081"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c1"),(0,e.kt)("td",{parentName:"tr",align:null},"VoterStakeRegistryError"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6082"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c2"),(0,e.kt)("td",{parentName:"tr",align:null},"AccountDiscriminatorMismatch"),(0,e.kt)("td",{parentName:"tr",align:null},"Account discriminator did not match.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6083"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c3"),(0,e.kt)("td",{parentName:"tr",align:null},"FuckingImpossibleError"),(0,e.kt)("td",{parentName:"tr",align:null},"This error is fucking impossible.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6084"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c4"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidVrfRound"),(0,e.kt)("td",{parentName:"tr",align:null},"Responding to the wrong VRF round")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6085"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c5"),(0,e.kt)("td",{parentName:"tr",align:null},"JobSizeExceeded"),(0,e.kt)("td",{parentName:"tr",align:null},"Job size has exceeded the max of 6400 bytes")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6086"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c6"),(0,e.kt)("td",{parentName:"tr",align:null},"JobChunksExceeded"),(0,e.kt)("td",{parentName:"tr",align:null},"Job loading can only support a maximum of 8 chunks")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6087"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c7"),(0,e.kt)("td",{parentName:"tr",align:null},"JobDataLocked"),(0,e.kt)("td",{parentName:"tr",align:null},"Job has finished initializing and is immutable")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6088"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c8"),(0,e.kt)("td",{parentName:"tr",align:null},"JobNotInitialized"),(0,e.kt)("td",{parentName:"tr",align:null},"Job account has not finished initializing")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6089"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17c9"),(0,e.kt)("td",{parentName:"tr",align:null},"BufferRelayerIllegalRoundOpenCall"),(0,e.kt)("td",{parentName:"tr",align:null},"BufferRelayer round open called too early.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6090"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ca"),(0,e.kt)("td",{parentName:"tr",align:null},"InvalidSliderAccount"),(0,e.kt)("td",{parentName:"tr",align:null},"Invalid slider account.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6091"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17cb"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfLiteHasExistingPool"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF lite account belongs to an existing pool.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6092"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17cc"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfPoolFull"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF pool is at max capacity.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6093"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17cd"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfPoolEmpty"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF pool is empty.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6094"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17ce"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfAccountNotFound"),(0,e.kt)("td",{parentName:"tr",align:null},"Failed to find VRF account in remaining accounts array.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6095"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17cf"),(0,e.kt)("td",{parentName:"tr",align:null},"AccountCloseNotReady"),(0,e.kt)("td",{parentName:"tr",align:null},"Account is not ready to be closed.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6096"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17d0"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfPoolRequestTooSoon"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF requested too soon.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6097"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17d1"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfPoolMiss"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF pool miss.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6098"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17d2"),(0,e.kt)("td",{parentName:"tr",align:null},"VrfLiteOwnedByPool"),(0,e.kt)("td",{parentName:"tr",align:null},"VRF lite belongs to a pool.")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"6099"),(0,e.kt)("td",{parentName:"tr",align:null},"0x17d3"),(0,e.kt)("td",{parentName:"tr",align:null},"InsufficientTokenBalance"),(0,e.kt)("td",{parentName:"tr",align:null},"Escrow has insufficient funds to perform this action.")))))}k.isMDXComponent=!0}}]);