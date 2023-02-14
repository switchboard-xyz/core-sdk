"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57526],{26565:(e,a,t)=>{t.d(a,{zY:()=>n,l1:()=>u,Au:()=>k});var l=t(67294),s=t(39960);const n=e=>{const{enumb:a}=e,t=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Number"),l.createElement("th",null,"Description"))),s=()=>l.createElement("tbody",null,a.values.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement("code",null,e.number)),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},a.description),l.createElement("table",null,l.createElement(t,null),l.createElement(s,null)))},o=e=>{const{fields:a}=e,t=()=>l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Name"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"))),n=e=>{let{field:a}=e;const t=l.createElement("code",null,a.longType);return void 0===a.typeLink?t:l.createElement(s.Z,{to:a.typeLink},t)},o=()=>l.createElement("tbody",null,a.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,l.createElement(n,{field:e})),l.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description)))));return l.createElement("table",null,l.createElement(t,null),l.createElement(o,null))},k=e=>{const{message:a}=e;return l.createElement(l.Fragment,null,l.createElement("p",{style:{whiteSpace:"pre-wrap"}},a.description),l.createElement(o,{fields:a.fields}))};var i=t(2734),p=t(90814);const u=e=>{(0,i.Z)();return l.createElement(l.Fragment,null,l.createElement("h3",null,e.title),l.createElement("p",null,e.description),l.createElement("p",null,l.createElement("strong",null,"Input: "),e.input||"N/A",e.inputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.inputSample):l.createElement(l.Fragment,null)),l.createElement(p.Z,{metastring:"",title:e.subtitle,language:"json"},JSON.stringify({name:e.title,tasks:e.tasks},void 0,2)),l.createElement("p",null,l.createElement("strong",null,"Output: "),e.output||"N/A",e.outputSample?l.createElement(l.Fragment,null,l.createElement("br",null),e.outputSample):l.createElement(l.Fragment,null)))}},17971:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>T});var l=t(83117),s=(t(67294),t(3905)),n=t(26565);const o={toc:[]};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("table",{style:{tableLayout:"fixed",width:"100%"}},(0,s.kt)("thead",null,(0,s.kt)("tr",null,(0,s.kt)("th",{width:"50%"},"Category"),(0,s.kt)("th",{"min-width":"50%"},"Tasks"))),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Web2 Fetch")),(0,s.kt)("p",null,"Retrieve data from the web")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/HttpTask"},"HttpTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/WebsocketTask"},"WebsocketTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Web3 Fetch")),(0,s.kt)("p",null,"Retrieve on-chain data")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/AnchorFetchTask"},"AnchorFetchTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/OracleTask"},"OracleTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SolanaAccountDataFetchTask"},"SolanaAccountDataFetchTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/JupiterSwapTask"},"JupiterSwapTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SerumSwapTask"},"SerumSwapTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/UniswapExchangeRateTask"},"UniswapExchangeRateTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SushiSwapExchangeRateTask"},"SushiSwapExchangeRateTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/PancakeswapExchangeRateTask"},"PancakeswapExchangeRateTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/DefiKingdomsTask"},"DefiKingdomsTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/MangoPerpTask"},"MangoPerpTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/LendingRateTask"},"LendingRateTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/XStepPriceTask"},"XStepPriceTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SplTokenParseTask"},"SplTokenParseTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SplStakePoolTask"},"SplStakePoolTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/LpExchangeRateTask"},"LpExchangeRateTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/LpTokenPriceTask"},"LpTokenPriceTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Parse")),(0,s.kt)("p",null,"Extract a value from a response")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/JsonParseTask"},"JsonParseTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/RegexExtractTask"},"RegexExtractTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/BufferLayoutParseTask"},"BufferLayoutParseTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Logic")),(0,s.kt)("p",null,"Perform some logical operation like if..else clauses")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/BoundTask"},"BoundTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/ConditionalTask"},"ConditionalTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/ComparisonTask"},"ComparisonTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Utils")),(0,s.kt)("p",null,"Helpful utility tasks like caching values or calculating a timestamp")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/CacheTask"},"CacheTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SysclockOffsetTask"},"SysclockOffsetTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/CronParseTask"},"CronParseTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/TpsTask"},"TpsTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Historical")),(0,s.kt)("p",null,"Parse an on-chain history buffer and perform some calculation")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/TwapTask"},"TwapTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/EwmaTask"},"EwmaTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/HistoryFunctionTask"},"HistoryFunctionTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/VwapTask"},"VwapTask"))))),(0,s.kt)("tr",null,(0,s.kt)("td",{style:{columnWidth:"auto"}},(0,s.kt)("b",null,(0,s.kt)("u",null,"Math")),(0,s.kt)("p",null,"Perform a mathematical operation like taking the maximum value of a list or raising a value to an exponent")),(0,s.kt)("td",null,(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/MaxTask"},"MaxTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/MeanTask"},"MeanTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/MedianTask"},"MedianTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/AddTask"},"AddTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/SubtractTask"},"SubtractTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/MultiplyTask"},"MultiplyTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/DivideTask"},"DivideTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/PowTask"},"PowTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/ValueTask"},"ValueTask")),(0,s.kt)("li",null,(0,s.kt)("a",{href:"/tasks/RoundTask"},"RoundTask"))))))))}k.isMDXComponent=!0;const i={title:"OracleJob",hide_title:!0,slug:"."},p=void 0,u={unversionedId:"tasks/OracleJob",id:"tasks/OracleJob",title:"OracleJob",description:"OracleJob",source:"@site/docs/tasks/OracleJob.mdx",sourceDirName:"tasks",slug:"/tasks/",permalink:"/tasks/",draft:!1,tags:[],version:"current",frontMatter:{title:"OracleJob",hide_title:!0,slug:"."},sidebar:"publisher",previous:{title:"Create a Feed",permalink:"/publisher/create-feed"},next:{title:"AddTask",permalink:"/tasks/AddTask"}},r={},T=[{value:"<code>OracleJob</code>",id:"oraclejob",level:2},{value:"Messages",id:"messages",level:2},{value:"<code>OracleJob</code>",id:"oraclejob-1",level:3},{value:"<code>Task</code>",id:"task",level:3}],c={toc:T};function d(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"oraclejob"},(0,s.kt)("inlineCode",{parentName:"h2"},"OracleJob")),(0,s.kt)("p",null,"Switchboard oracles read on-chain job accounts to determine how to fetch and\nrespond to update request. An OracleJob is a collection of tasks that are\nchained together to arrive at a single numerical value."),(0,s.kt)("p",null,"Switchboard tasks are executed sequentially with the output of the previous task\nprovided as the input to the next task in a chain. After the final task, the\nTaskRunner will attempt to convert the running result to a numeric value."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE")),": Some task do not consume the running input such as HttpTask,\nWebsocketTask, and most of the fetch tasks. If the TaskRunner sees one of these\ntask types in the middle of a job definition, it will effectively reset the\nrunning result."),(0,s.kt)("p",null,"Switchboard tasks can be divided into the following categories:"),(0,s.kt)(k,{mdxType:"TaskCategories"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"messages"},"Messages"),(0,s.kt)("p",null,"Represents a list of tasks to be performed by a switchboard oracle."),(0,s.kt)("h3",{id:"oraclejob-1"},(0,s.kt)("inlineCode",{parentName:"h3"},"OracleJob")),(0,s.kt)(n.Au,{key:0,message:{name:"OracleJob",longName:"OracleJob",fullName:".OracleJob",description:"Represnts a list of tasks to be performed by a switchboard oracle.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"tasks",description:"The chain of tasks to perform for this ",label:"repeated",type:"Task",longType:"Task",fullType:"Task",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("h3",{id:"task"},(0,s.kt)("inlineCode",{parentName:"h3"},"Task")),(0,s.kt)(n.Au,{key:1,message:{name:"Task",longName:"Task",fullName:".Task",description:"",hasExtensions:!1,hasFields:!0,hasOneofs:!0,extensions:[],fields:[{name:"http_task",description:"",label:"optional",type:"HttpTask",longType:"HttpTask",fullType:"HttpTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"json_parse_task",description:"",label:"optional",type:"JsonParseTask",longType:"JsonParseTask",fullType:"JsonParseTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"median_task",description:"",label:"optional",type:"MedianTask",longType:"MedianTask",fullType:"MedianTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"mean_task",description:"",label:"optional",type:"MeanTask",longType:"MeanTask",fullType:"MeanTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"websocket_task",description:"",label:"optional",type:"WebsocketTask",longType:"WebsocketTask",fullType:"WebsocketTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"divide_task",description:"",label:"optional",type:"DivideTask",longType:"DivideTask",fullType:"DivideTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"multiply_task",description:"",label:"optional",type:"MultiplyTask",longType:"MultiplyTask",fullType:"MultiplyTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"lp_token_price_task",description:"",label:"optional",type:"LpTokenPriceTask",longType:"LpTokenPriceTask",fullType:"LpTokenPriceTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"lp_exchange_rate_task",description:"",label:"optional",type:"LpExchangeRateTask",longType:"LpExchangeRateTask",fullType:"LpExchangeRateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"conditional_task",description:"",label:"optional",type:"ConditionalTask",longType:"ConditionalTask",fullType:"ConditionalTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"value_task",description:"",label:"optional",type:"ValueTask",longType:"ValueTask",fullType:"ValueTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"max_task",description:"",label:"optional",type:"MaxTask",longType:"MaxTask",fullType:"MaxTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"regex_extract_task",description:"",label:"optional",type:"RegexExtractTask",longType:"RegexExtractTask",fullType:"RegexExtractTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"xstep_price_task",description:"",label:"optional",type:"XStepPriceTask",longType:"XStepPriceTask",fullType:"XStepPriceTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"add_task",description:"",label:"optional",type:"AddTask",longType:"AddTask",fullType:"AddTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"subtract_task",description:"",label:"optional",type:"SubtractTask",longType:"SubtractTask",fullType:"SubtractTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"twap_task",description:"",label:"optional",type:"TwapTask",longType:"TwapTask",fullType:"TwapTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"serum_swap_task",description:"",label:"optional",type:"SerumSwapTask",longType:"SerumSwapTask",fullType:"SerumSwapTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"pow_task",description:"",label:"optional",type:"PowTask",longType:"PowTask",fullType:"PowTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"lending_rate_task",description:"",label:"optional",type:"LendingRateTask",longType:"LendingRateTask",fullType:"LendingRateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"mango_perp_market_task",description:"",label:"optional",type:"MangoPerpMarketTask",longType:"MangoPerpMarketTask",fullType:"MangoPerpMarketTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"jupiter_swap_task",description:"",label:"optional",type:"JupiterSwapTask",longType:"JupiterSwapTask",fullType:"JupiterSwapTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"perp_market_task",description:"",label:"optional",type:"PerpMarketTask",longType:"PerpMarketTask",fullType:"PerpMarketTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"oracle_task",description:"",label:"optional",type:"OracleTask",longType:"OracleTask",fullType:"OracleTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"anchor_fetch_task",description:"",label:"optional",type:"AnchorFetchTask",longType:"AnchorFetchTask",fullType:"AnchorFetchTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"defi_kingdoms_task",description:"",label:"optional",type:"DefiKingdomsTask",longType:"DefiKingdomsTask",fullType:"DefiKingdomsTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"tps_task",description:"",label:"optional",type:"TpsTask",longType:"TpsTask",fullType:"TpsTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"spl_stake_pool_task",description:"",label:"optional",type:"SplStakePoolTask",longType:"SplStakePoolTask",fullType:"SplStakePoolTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"spl_token_parse_task",description:"",label:"optional",type:"SplTokenParseTask",longType:"SplTokenParseTask",fullType:"SplTokenParseTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"uniswap_exchange_rate_task",description:"",label:"optional",type:"UniswapExchangeRateTask",longType:"UniswapExchangeRateTask",fullType:"UniswapExchangeRateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"sushiswap_exchange_rate_task",description:"",label:"optional",type:"SushiswapExchangeRateTask",longType:"SushiswapExchangeRateTask",fullType:"SushiswapExchangeRateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"pancakeswap_exchange_rate_task",description:"",label:"optional",type:"PancakeswapExchangeRateTask",longType:"PancakeswapExchangeRateTask",fullType:"PancakeswapExchangeRateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"cache_task",description:"",label:"optional",type:"CacheTask",longType:"CacheTask",fullType:"CacheTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"sysclock_offset_task",description:"",label:"optional",type:"SysclockOffsetTask",longType:"SysclockOffsetTask",fullType:"SysclockOffsetTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"marinade_state_task",description:"",label:"optional",type:"MarinadeStateTask",longType:"MarinadeStateTask",fullType:"MarinadeStateTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"solana_account_data_fetch_task",description:"",label:"optional",type:"SolanaAccountDataFetchTask",longType:"SolanaAccountDataFetchTask",fullType:"SolanaAccountDataFetchTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"buffer_layout_parse_task",description:"",label:"optional",type:"BufferLayoutParseTask",longType:"BufferLayoutParseTask",fullType:"BufferLayoutParseTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"cron_parse_task",description:"",label:"optional",type:"CronParseTask",longType:"CronParseTask",fullType:"CronParseTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"min_task",description:"",label:"optional",type:"MinTask",longType:"MinTask",fullType:"MinTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"history_function_task",description:"",label:"optional",type:"HistoryFunctionTask",longType:"HistoryFunctionTask",fullType:"HistoryFunctionTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"vwap_task",description:"",label:"optional",type:"VwapTask",longType:"VwapTask",fullType:"VwapTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"ewma_task",description:"",label:"optional",type:"EwmaTask",longType:"EwmaTask",fullType:"EwmaTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"comparison_task",description:"",label:"optional",type:"ComparisonTask",longType:"ComparisonTask",fullType:"ComparisonTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"round_task",description:"",label:"optional",type:"RoundTask",longType:"RoundTask",fullType:"RoundTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""},{name:"bound_task",description:"",label:"optional",type:"BoundTask",longType:"BoundTask",fullType:"BoundTask",ismap:!1,isoneof:!0,oneofdecl:"Task",defaultValue:""}]},mdxType:"ProtoMessage"}),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);