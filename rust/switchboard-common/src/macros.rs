#[macro_export]
macro_rules! cfg_client {
    ($($item:item)*) => {
        $(
            #[cfg(feature = "client")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "client")))]
            $item
        )*
    }
}

#[macro_export]
macro_rules! cfg_not_client {
    ($($item:item)*) => {
        $(
            #[cfg(not(feature = "client"))]
            #[cfg_attr(doc_cfg, doc(cfg(not(feature = "client"))))]
            $item
        )*
    }
}

#[macro_export]
macro_rules! cfg_solana {
    ($($item:item)*) => {
        $(
            #[cfg(feature = "solana")]
            #[cfg_attr(doc_cfg, doc(cfg(feature = "solana")))]
            $item
        )*
    }
}
