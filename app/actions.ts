'use server'; //?memberi tanda jika ini action


export async function createComment(formData: FormData) {
    console.log(formData.get("comment")); //?comment: nama inputan di form
}