import { useBlogStore } from '../store/useBlogStore';

export const useFilteredPosts = () => {
  const { 
    posts, 
    searchQuery, 
    selectedCategory, 
    selectedTag, 
    currentPage, 
    itemsPerPage 
  } = useBlogStore();

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    posts: paginatedPosts,
    totalPages,
    totalPosts: filteredPosts.length,
  };
};
