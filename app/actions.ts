'use server'; //?memberi tanda jika ini action


export async function createComment(prevData: any, formData: FormData) {
    console.log(formData.get("comment")); //?comment: nama inputan di form
    const comment = formData.get("comment") as string;

    if(!comment){
        return {
            error: "Comment is required"
        }
    }
}