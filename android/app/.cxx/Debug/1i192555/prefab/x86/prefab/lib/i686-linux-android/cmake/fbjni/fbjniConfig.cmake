if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/dreitech/.gradle/caches/8.8/transforms/04b8a56aa4f5b9d03bcc0e632b9e3643/transformed/fbjni-0.6.0/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/dreitech/.gradle/caches/8.8/transforms/04b8a56aa4f5b9d03bcc0e632b9e3643/transformed/fbjni-0.6.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

