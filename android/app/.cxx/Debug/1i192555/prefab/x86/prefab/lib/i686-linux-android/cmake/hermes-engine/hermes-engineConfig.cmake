if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/dreitech/.gradle/caches/8.8/transforms/f864eafcce226d61920c3d23011f517d/transformed/hermes-android-0.75.3-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/dreitech/.gradle/caches/8.8/transforms/f864eafcce226d61920c3d23011f517d/transformed/hermes-android-0.75.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

